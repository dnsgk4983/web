$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });



  $('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });



  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });

  $('#some-button').magnificPopup({
    items: {
      src: 'path-to-image-1.jpg'
    },
    type: 'image' // this is default type
});

// Example with multiple objects
$('#some-button').magnificPopup({
    items: [
      {
        src: 'path-to-image-1.jpg'
      },
      {
        src: 'http://vimeo.com/123123',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div>Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div>HTML string</div>',
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});