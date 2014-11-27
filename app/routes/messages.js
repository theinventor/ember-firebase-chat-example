import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  },

  actions: {
    createMessage: function(){
      var message = this.store.createRecord("message", {
        body: this.controller.get("newMessage"),
        timestamp: new Date()
      });

      message.save();
    }
  }

});
