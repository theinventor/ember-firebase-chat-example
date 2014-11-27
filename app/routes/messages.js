import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  },

  actions: {
    createMessage: function(){
    var message = this.store.createRecord("message");
      message.set("body",this.controller.get("newMessage"));
      message.save();
    }
  }

});
