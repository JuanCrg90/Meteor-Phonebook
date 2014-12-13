
PhoneBook = new Mongo.Collection("phonebook");

if (Meteor.isClient) {



  Template.main.helpers({
    phonebook: function () {
      return PhoneBook.find();
  }
});

  Template.main.events({    
    "keypress #address": function(event){
        if(event.charCode =='13'){
            var name = $('#name').val();
            var phone = $('#phone').val();
            var address = $('#address').val();

        Meteor.call("addRow", name,phone,address);

        $('#name').val("");
        $('#phone').val("");
        $('#address').val("");
    }
    }

    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
});
}

Meteor.methods({
  addRow: function(name,phone,address)
  {
    if(name!="" && phone!="" && address!="")
    {
      PhoneBook.insert({
        name:name,
        phone:phone,
        address:address
    });
  }
}

});