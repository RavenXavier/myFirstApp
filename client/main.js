import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.count = new ReactiveVar(0);
});

Template.letsgo.onCreated(function letsgoOnCreated(){
	this.fruits = new ReactiveVar(0);
	this.vegetables = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  count() {
    return Template.instance().count.get();
  },
});

Template.letsgo.helpers({
  fruits() {
    return Template.instance().fruits.get();
  },
   vegetables() {
    return Template.instance().vegetables.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'mouseover #twinkle'(event, instance) {
    // increment the counter when button is clicked
    instance.count.set(instance.count.get() + 1);
  },
});

Template.letsgo.events({
	'click #fruits'(event, instance) {
	 instance.fruits.set(instance.fruits.get() + 1);
	},
	'click #veggies'(event, instance) {
	 instance.vegetables.set(instance.vegetables.get() + 1);
	},
});
