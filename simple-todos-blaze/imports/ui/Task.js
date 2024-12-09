import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/TasksCollections';
import './Task.html';

Template.task.events({
  'click .toggle-checked'() {
    TasksCollection.update(this._id, {
      $set: { isChecked: !this.isChecked },
    });
  },
  'click .delete'() {
    console.log('click')
    TasksCollection.remove(this._id);
  },
});