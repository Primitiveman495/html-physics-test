var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

// Creating Engine
var engine = Engine.create(),
    world = engine.world;

// Creating Gravity
engine.gravity.y = 1

// Creating Renderer Box
var render = Render.create({
        element: document.getElementById("canvas"),
        engine: engine,
        options: {
        background: "none",
            width: 800,
            height: 600,
            showAngleIndicator: true,
            wireframe: false
        }
    });

// Run the Renderer
Render.run(render);

// Creating Runner
var runner = Runner.create();
Runner.run(runner, engine);