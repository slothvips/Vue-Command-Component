# Advanced Usage

This chapter introduces advanced features and usage scenarios for imperative components.

## Promise Support

Promise support is one of the biggest advantages of imperative components. It changes communication with components into a Promise-based async flow. The following typical cases show the convenience it brings:

### Case 1: Inline Table Row Editing

<demo vue="../components/promise.vue"></demo>

In admin systems, editing table row data in a dialog is a common requirement. Compared with declarative implementation, imperative components provide clear advantages in developer experience and code simplicity.

### Case 2: Multi-Step Dialogs

In some scenarios, a dialog needs to perform multiple consecutive steps, such as data selection, content editing, and information confirmation. Promise support makes this type of flow elegant:

<demo vue="../components/promise2.vue"></demo>

### Case 3: A Creative Trick

Command components are not limited to dialog-like scenarios. They can also work as a special node mount manager:

<demo vue="../components/flower.vue"></demo>

## Reactive Components

Change the first argument to a function.

<demo vue="../components/reactive-component.vue"></demo>

## Reactive Configuration

Component presentation is usually relatively fixed, but in specific scenarios you may need to adjust component configuration dynamically based on data changes. The implementation is simple: make the configuration item a function that returns a config object.

<demo vue="../components/reactive-config.vue"></demo>
