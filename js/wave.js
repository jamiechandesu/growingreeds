class App {
  constructor() {
    this.dom = document.querySelector("#main-wrapper");
    this.canvas = this.dom.querySelector("#my-canvas");
    this.fragment = document.querySelector("#fragment").textContent;
    this.vertex = document.querySelector("#vertex").textContent;
    this.width = this.dom.offsetWidth;
    this.height = this.dom.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });

    // this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.camera.position.set(0, 0, 1);
    this.scene = new THREE.Scene();
    // this.renderer.setClearColor(0xffffff, 0);
    // this.scene.background = new THREE.Color(0x000000, 0);
    this.halfWidth = window.innerWidth / 2;
    this.halfHeight = window.innerHeight / 2;
    this.imageAspect = 2760 / 1707;

    this.guiSettings = {
      distortion: "3",
    };
    this.gui = new dat.GUI();
    this.gui.add(this.guiSettings, "distortion", {
      "Blow In": "1",
      "Blow Out": "2",
      "Wave Left": "3",
      "Wave Right": "4",
      "Wave Down": "5",
      "Wave Up": "6",
      "Blow In + Wave Left": "7",
      "Blow In + Wave Right": "8",
      "Blow In + Wave Down": "9",
      "Blow In + Wave Up": "10",
    });

    this.addObjects();
    this.render();
    this.initEvents();
    this.onResize();
  }

  addObjects = () => {
    console.group(this.img);
    // Plane Material
    this.planeMat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        u_time: { type: "f", value: 0 },
        u_resolution: { type: "v4", value: new THREE.Vector4() },
        u_strength: { type: "f", value: 0 },
        u_speed: { type: "f", value: 0 },
        u_texture: {
          type: "t",
          value: new THREE.TextureLoader().load(
            "https://i.imgur.com/cmTH0ZL.png"
          ),
        },
        u_distortion: { type: "i", value: 1 },
      },
      // wireframe: true,
      transparent: true,
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
    });

    // Plane Geometry
    this.planeGeo = new THREE.PlaneBufferGeometry(1, 1, 100, 100);

    // Plane Mesh
    this.plane = new THREE.Mesh(this.planeGeo, this.planeMat);

    // Add plane to scene
    this.scene.add(this.plane);
  };

  render = () => {
    // Update Uniforms
    this.planeMat.uniforms.u_time.value += 0.05;
    this.planeMat.uniforms.u_distortion.value = this.guiSettings.distortion;
    this.planeMat.uniforms.u_strength.value = 6.0;
    this.planeMat.uniforms.u_speed.value = 0.5;

    // Render
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
  };

  initEvents = () => {
    window.addEventListener("resize", this.onResize);
  };

  onResize = () => {
    this.width = this.dom.offsetWidth;
    this.height = this.dom.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    /* Image cover */
    let a1;
    let a2;
    if (this.height / this.width < this.imageAspect) {
      a2 = ((1 / this.imageAspect) * this.height) / this.width;
      a1 = 1;
    } else {
      a2 = 1;
      a1 = (this.width / this.height) * this.imageAspect;
    }

    // update uniforms

    this.planeMat.uniforms.u_resolution.value.x = this.width;
    this.planeMat.uniforms.u_resolution.value.y = this.height;
    this.planeMat.uniforms.u_resolution.value.z = a1;
    this.planeMat.uniforms.u_resolution.value.w = a2;

    this.camera.updateProjectionMatrix();
  };
}

new App();
