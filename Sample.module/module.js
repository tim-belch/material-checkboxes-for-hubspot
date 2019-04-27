var belchmcheckboxes_ = (function(){
  return {
    init: function(){
      this.createListeners();
    },
    createListeners: function(){
      this.on("message", this.formLoaded.bind(this));
    },
    on: function(action, callback){
      window.addEventListener(action, callback);
    },
    formLoaded: function(event){
      if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
        this.form = window.$('form[data-form-id="' + event.data.id + '"]');
        this.form.find('.hs-form-booleancheckbox, .hs-form-checkbox').each(function(i, elem){
          this.classMe(window.$(elem).find('label'), "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect");
          this.classMe(window.$(elem).find('label').find('span'), "mdl-checkbox__label");
          this.classMe(window.$(elem).find('input'), "mdl-checkbox__input mdl-checkbox--accent");
        }.bind(this)) ;
      }
    },
    classMe: function(elem, cssClass){
      elem.addClass(cssClass);
    }
  }
})();
belchmcheckboxes_.init();
