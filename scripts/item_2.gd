extends RigidBody2D

@export var item_name: String = "item2"
var can_collect = false

func _ready():
	$Area2D.monitoring = true
	$Area2D.monitorable = true
	$Area2D.body_entered.connect(_on_body_entered)
	gravity_scale = 1.0
	

	await get_tree().create_timer(0.4).timeout
	can_collect = true

func _on_body_entered(body):
	if not can_collect:
		return
	
	if body is CharacterBody2D and body.is_in_group("player"):
		print("Coletou: ", item_name)
		queue_free()
