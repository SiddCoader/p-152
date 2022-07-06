AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 150 },
    height: { type: "number", default: 3 }
  },

  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      radius: this.data.radius,
      height: this.data.height
    });
    this.el.setAttribute("material", { color: "#1769aa" });
  },
  update: function(){
    window.addEventListener("click", e => {
      this.data.clickcounter = this.data.clickcounter +1;
      if (this.data.clickcounter ===1){
        const rotation = {x:0, y: 20, z: 0};
        this.el.setAttribute("rotation", rotation);
      }else if (this.data.clickcounter === 2)
      {
        const rotation = {X: 0, y: 100, z: 0};
      }
    })
    
  }
});
