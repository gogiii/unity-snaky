#pragma strict

// just draws fps

function Start () {
	gameObject.guiText.font.material.color = Color(0,0,0);
}

function Update () {
	var time = Time.deltaTime;
	if(time != 0) {
		gameObject.guiText.text = "FPS: " + Mathf.Floor(1.0/time);
	}
}