extends CharacterBody2D

@export var speed : float = 200.0
@export var jump_velocity : float = -400.0
@export var acceleration : float = 2000.0
@export var friction : float = 1500.0
@export var air_friction : float = 800.0
@export var dash_speed : float = 700.0
@export var dash_duration : float = 0.2
@export var dash_cooldown : float = 0.9
@export var attack_cooldown : float = 1.0
@export var attack_slowdown : float = 0.5
@export var tilemap_path: NodePath
@export var max_attack_distance: float = 120.0
@export var highlight_color: Color = Color(1, 1, 0, 1)
@export var border_thickness: float = 1.0
@export var item_scene_1: PackedScene
@export var item_scene_2: PackedScene
@export_range(0.0, 1.0) var drop_chance: float = 0.5

@onready var animated_sprite = $AnimatedSprite2D
@onready var tilemap: TileMapLayer = get_node_or_null(tilemap_path)

var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var is_dashing = false
var dash_time = 0.0
var dash_dir = 1
var can_dash = true
var is_attacking = false
var attack_timer = 0.0
var can_attack = true
var attack_cooldown_timer = 0.0
var facing_dir = 1

var highlight: Node2D
var current_highlight_cell: Vector2i = Vector2i(-999, -999)

func _ready():
	highlight = Node2D.new()
	highlight.z_index = 100
	add_child(highlight)
	highlight.visible = false

func _physics_process(delta):
	if animated_sprite == null:
		return

	if not is_on_floor():
		velocity.y += gravity * delta

	if Input.is_action_just_pressed("ui_accept") and is_on_floor() and not is_attacking:
		velocity.y = jump_velocity
		animated_sprite.play("pulo1")

	if Input.is_key_pressed(KEY_SHIFT) and can_dash and not is_dashing and not is_attacking:
		is_dashing = true
		can_dash = false
		dash_time = dash_duration
		dash_dir = facing_dir
		animated_sprite.play("dash")

	if Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT) and can_attack and not is_attacking:
		is_attacking = true
		can_attack = false
		attack_timer = 0.55
		attack_cooldown_timer = attack_cooldown
		break_tile()

	var direction = 0
	if Input.is_key_pressed(KEY_D) or Input.is_key_pressed(KEY_RIGHT):
		direction += 1
	if Input.is_key_pressed(KEY_A) or Input.is_key_pressed(KEY_LEFT):
		direction -= 1

	if direction != 0:
		facing_dir = direction

	if is_dashing:
		velocity.x = dash_dir * dash_speed
		dash_time -= delta
		if dash_time <= 0:
			is_dashing = false
	elif is_attacking:
		attack_timer -= delta
		if attack_timer <= 0:
			is_attacking = false
		var target_speed = direction * speed * attack_slowdown
		velocity.x = move_toward(velocity.x, target_speed, acceleration * delta)
	else:
		if direction != 0:
			var target = direction * speed
			var accel = acceleration if is_on_floor() else acceleration * 0.7
			velocity.x = move_toward(velocity.x, target, accel * delta)
			animated_sprite.flip_h = direction < 0
		else:
			var fric = friction if is_on_floor() else air_friction
			velocity.x = move_toward(velocity.x, 0, fric * delta)

	move_and_slide()
	update_highlight()

	if is_attacking:
		animated_sprite.play("ataque")
	elif is_dashing:
		animated_sprite.play("dash")
	elif not is_on_floor():
		if velocity.y < 0:
			animated_sprite.play("pulo1")
		else:
			animated_sprite.play("pulo2")
	elif direction != 0:
		animated_sprite.play("andando")
	else:
		animated_sprite.play("parado")

	if not can_dash and not is_dashing and is_on_floor():
		dash_time += delta
		if dash_time >= dash_cooldown:
			can_dash = true
			dash_time = 0.0

	if not can_attack:
		attack_cooldown_timer -= delta
		if attack_cooldown_timer <= 0:
			can_attack = true

func break_tile():
	if tilemap == null:
		return

	var mouse_pos = get_global_mouse_position()
	var distance = global_position.distance_to(mouse_pos)

	if distance > max_attack_distance:
		return

	var cell = tilemap.local_to_map(tilemap.to_local(mouse_pos))

	if tilemap.get_cell_source_id(cell) != -1:
		var tile_pos = tilemap.to_global(tilemap.map_to_local(cell))
		
		tilemap.erase_cell(cell)
		
		if randf() <= drop_chance:
			var item_to_drop = null
			
			if randf() < 0.5:
				item_to_drop = item_scene_1
			else:
				item_to_drop = item_scene_2
			
			if item_to_drop:
				var item = item_to_drop.instantiate()
				get_tree().current_scene.add_child(item)
				item.global_position = tile_pos

func update_highlight():
	if tilemap == null or highlight == null:
		return

	var mouse_pos = get_global_mouse_position()
	var distance = global_position.distance_to(mouse_pos)

	if distance > max_attack_distance:
		highlight.visible = false
		return

	var cell = tilemap.local_to_map(tilemap.to_local(mouse_pos))

	if tilemap.get_cell_source_id(cell) == -1:
		highlight.visible = false
		return

	if cell != current_highlight_cell:
		current_highlight_cell = cell

		for child in highlight.get_children():
			child.queue_free()

		var tile_size = tilemap.tile_set.tile_size
		var local_pos = tilemap.map_to_local(cell)
		var global_tile_pos = tilemap.to_global(local_pos)
		var half = Vector2(tile_size) / 2.0

		highlight.global_position = global_tile_pos
		highlight.visible = true

		var thickness = border_thickness

		var top = ColorRect.new()
		top.color = highlight_color
		top.size = Vector2(tile_size.x, thickness)
		top.position = Vector2(-half.x, -half.y)
		highlight.add_child(top)

		var bottom = ColorRect.new()
		bottom.color = highlight_color
		bottom.size = Vector2(tile_size.x, thickness)
		bottom.position = Vector2(-half.x, half.y - thickness)
		highlight.add_child(bottom)

		var left = ColorRect.new()
		left.color = highlight_color
		left.size = Vector2(thickness, tile_size.y)
		left.position = Vector2(-half.x, -half.y)
		highlight.add_child(left)

		var right = ColorRect.new()
		right.color = highlight_color
		right.size = Vector2(thickness, tile_size.y)
		right.position = Vector2(half.x - thickness, -half.y)
		highlight.add_child(right)
