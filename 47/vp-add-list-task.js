class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}setEvents(){this.button.addEventListener("click",this.handleEvent.bind(this)),this.inputField.addEventListener("keyup",this.handleEvent.bind(this))}handleEvent(t){"keyup"===t.type&&"Enter"!==t.code||""===this.inputField.value||(this.dispatchEvent(this.getTriggerEvent()),this.inputField.value="")}getTriggerEvent(){return new CustomEvent("vp:trigger",{detail:{trigger:"addTask",title:this.inputField.value},bubbles:!0,composed:!0})}connectedCallback(){this.shadowRoot.innerHTML=this.render(),this.button=this.shadowRoot.querySelector("button"),this.inputField=this.shadowRoot.querySelector("input"),this.setEvents()}disconnectedCallback(){this.button.removeEventListener("click",this.handleEvent.bind(this)),this.inputField.removeEventListener("keyup",this.handleEvent.bind(this))}render(){return'<label for="task"><vp-icon icon="icons:add"></vp-icon></label><input type="text" id="task" maxlength="255" aria-label="Add a task" placeholder="Add a task" /><button>Add</button>'}}const e=t.prototype.connectedCallback,n=t.prototype.render;Object.assign(t.prototype,{connectedCallback:function(){e&&e.call(this)},render:function(){return this.getStyles()+(n?n.call(this):"")},getStyles:function(){return'<style>:host{display:flex;align-items:center;padding:0 12px}:host>*{font-family:"Open Sans",Arial,sans-serif}:host label{width:24px;height:24px;flex:0 0 24px;cursor:pointer;text-align:center;line-height:22px}:host label:hover vp-icon{color:var(--primary)}:host input{border:none;background:none;box-shadow:none;border-radius:0;font-size:1.3rem;padding:16px 12px;width:100%}:host input::placeholder{color:var(--primary)}:host input:focus{outline:none;color:var(--base-color)}:host input:focus~button{color:var(--primary)}:host input:focus::placeholder{color:var(--base-color)}:host button{color:var(--base-color);background:transparent;border:transparent;font-size:1rem;font-weight:600;cursor:pointer;letter-spacing:1px}:host button:focus{outline:none}</style>'}}),window.customElements.get("vp-add-list-task")||(window.AddListTaskElement=t,window.customElements.define("vp-add-list-task",t));
