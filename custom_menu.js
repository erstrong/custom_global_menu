// This custom javascript will insert a drop-down menu after 'Calendar'.
$(document).ready(function(){
//Define a variable with the HTML to be added
//Use a separate 'li' and include all spans for each menu item
  var $customMenu =$('<li id="new_menu" class="menu-item"> <a href="/" class="menu-item-title">Name of Menu<span class="menu-item-title-icon"></span> <i class="icon-mini-arrow-down"></i></a><div class="menu-item-drop"> <table cellspacing="0"> <tbody> <tr> <td class="menu-item-drop-column" id="new_menu"> <ul class="menu-item-drop-column-list"> <li class="customListItem"> <span class="name-right-wrapper"><span class="secondary-right"></span></span> <span class="name ellipsis"> <a href = "URL for custom menu item">Custom Menu Item</a></span></li> <li class="customListItem"> <span class="name-right-wrapper"><span class="secondary-right"></span></span> <span class="name ellipsis"> <a href = "URL for item 2">Custom Menu Item 2</a></span></li> </ul> </td> </tr> </tbody> </table> </div> </li>');
//Append the custom HTML to the main navigation menu
  $('#calendar_menu_item').after($customMenu);
});
