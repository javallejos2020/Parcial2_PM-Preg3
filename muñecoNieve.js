var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-3,1,3);
	camera.lookAt(0,1,2);

	// LIGHTS
	// FF0000 FFFFFF
	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 10, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x000000 );//111111

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x000000, 1.5 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT

	var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF ,wireframe:false} );
	//cabeza
	var cabeza1= new THREE.SphereGeometry(0.3,20,15);
	var mcabeza1= new THREE.Mesh(cabeza1,material);
	mcabeza1.position.y=1.4;
	
	//nariz
	var materialn = new THREE.MeshBasicMaterial( { color: 0xED6500 ,wireframe:false} );
	var naris=new THREE.CylinderGeometry(0,0.06,0.5);
	var mnaris=new THREE.Mesh(naris,materialn);
	mnaris.position.y=1.4;
	mnaris.position.z=0.35;
	mnaris.rotation.x=33;
	
	//Ojos
	var material1 = new THREE.MeshBasicMaterial( { color: 0x000000 ,wireframe:false} );

	var circulo=new THREE.CircleGeometry(0.020,30);
    var mcirculo = new THREE.Mesh(circulo, material1);
    mcirculo.position.x=0.065;
    mcirculo.position.y=1.5;
    mcirculo.position.z=0.299;

    var sojo=new THREE.CircleGeometry(0.04,30);
    var msojo = new THREE.Mesh(sojo, material);
    msojo.position.x=0.079;
    msojo.position.y=1.51;
    msojo.position.z=0.298;

    var sojo2=new THREE.CircleGeometry(0.05,30);
    var msojo2 = new THREE.Mesh(sojo2, material1);
    msojo2.position.x=0.08;
    msojo2.position.y=1.52;
    msojo2.position.z=0.297;
    
    var circuloi=new THREE.CircleGeometry(0.020,30);
    var mcirculoi = new THREE.Mesh(circuloi, material1);
    mcirculoi.position.x=-0.065;
    mcirculoi.position.y=1.5;
    mcirculoi.position.z=0.299;

    var sojoi=new THREE.CircleGeometry(0.04,30);
    var msojoi = new THREE.Mesh(sojoi, material);
    msojoi.position.x=-0.079;
    msojoi.position.y=1.51;
    msojoi.position.z=0.298;

    var sojo2i=new THREE.CircleGeometry(0.05,30);
    var msojo2i = new THREE.Mesh(sojo2i, material1);
    msojo2i.position.x=-0.08;
    msojo2i.position.y=1.52;
    msojo2i.position.z=0.297;
    //boca
    var boca=new THREE.CircleGeometry(0.05,30);
    var mboca = new THREE.Mesh(boca, material1);
 
    mboca.position.y=1.30;
    mboca.position.z=0.3;

	//manos
	var materialc = new THREE.MeshBasicMaterial( { color: 0x482103 ,wireframe:true} );
	var brazo =new THREE.CylinderGeometry(0.040,0.040,0.8,20);
	var mbrazo=new THREE.Mesh(brazo,materialc);
	mbrazo.position.x=0.4;
	mbrazo.position.y=1;
	mbrazo.rotation.z=20;
	
	var brazoi =new THREE.CylinderGeometry(0.040,0.040,0.8,20);
	var mbrazoi=new THREE.Mesh(brazoi,materialc);
	mbrazoi.position.x=-0.4;
	mbrazoi.position.y=1;
	mbrazoi.rotation.z=-20;

	//pecho
	var boton=new THREE.CircleGeometry(0.05,30);
    var mboton = new THREE.Mesh(boton, material1);
    
     mboton.position.y=1;
     mboton.position.z=0.329;

    var boton2=new THREE.CircleGeometry(0.05,30);
    var mboton2 = new THREE.Mesh(boton2, material1);
    
     mboton2.position.y=0.75;
     mboton2.position.z=0.499;

    var boton3=new THREE.CircleGeometry(0.05,30);
    var mboton3 = new THREE.Mesh(boton3, material1);
     mboton3.position.y=0.55;
     mboton3.position.z=0.499;

	//pecho 1
	var pecho1= new THREE.SphereGeometry(0.3,0.5,10,);
	var mpecho1= new THREE.Mesh(pecho1,material);
	mpecho1.position.y=1;
	//pecho 2
	var pecho2= new THREE.SphereGeometry(0.5,0.1,10);
	var mpecho2= new THREE.Mesh(pecho2,material);
	mpecho2.position.y=0.6;

	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	//cara
	scene.add(mnaris);
	scene.add(mcirculo);
	scene.add(msojo);
	scene.add(msojo2);
	scene.add(mcirculoi);
	scene.add(msojoi);
	scene.add(msojo2i);
	scene.add(mboca);
	scene.add(mbrazo);
	scene.add(mbrazoi);
	scene.add(mboton);
	scene.add(mboton2);
	scene.add(mboton3);
	scene.add(mcabeza1);
	scene.add(mpecho1);
	scene.add(mpecho2);

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}
try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
