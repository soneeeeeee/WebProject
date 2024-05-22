document.getElementById("popupButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("popupButton2").addEventListener("click", function() {
  document.getElementById("popup2").style.display = "block";
});

document.getElementById("closeButton2").addEventListener("click", function() {
  document.getElementById("popup2").style.display = "none";
});



function show() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("content").style.marginLeft = "25%";
}

function hide() {
  document.getElementById("mySidebar").style.width = "0%";
  document.getElementById("content").style.marginLeft = "0%";
}



function showVerificationInput() {
  var phoneForm = document.getElementById('phone_form');
  var verificationCodeForm = document.getElementById('verification_code_form');

  phoneForm.style.display = 'none';
  verificationCodeForm.style.display = 'block';
}



function searchText() {
  var searchQuery = document.getElementById('searchInput').value.toLowerCase();
  var divs = document.getElementsByClassName('searchable');

  Array.from(divs).forEach(function(div) {
      var text = div.textContent.toLowerCase();
      if (text.includes(searchQuery)) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  });
}



function searchByWord(word) {
  var divs = document.querySelectorAll('.searchable');

  divs.forEach(function(div) {
    var text = div.textContent.toLowerCase();
    if (text.includes(word.toLowerCase())) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}



function undoFilter() {
  var divs = document.querySelectorAll('.searchable');

  divs.forEach(function(div) {
    div.style.display = 'block';
  });
}



function sendMessage1() {
  var messageInput = document.querySelector('.chat-input input[type="text"]');
  var messageText = messageInput.value.trim();
  if (messageText !== '') {
      var chatMessages = document.querySelector('.chat-messages');
      var messageDiv = document.createElement('div');
      messageDiv.classList.add('message', 'sent');
      messageDiv.innerHTML = '<p>' + messageText + '</p>';
      chatMessages.appendChild(messageDiv);
      messageInput.value = '';

      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function sendMessage2() {
  var messageInput = document.querySelector('.chat-input input[type="text"]');
  var messageText = messageInput.value.trim();
  if (messageText !== '') {
      var chatMessages = document.querySelector('.chat-messages');
      var messageDiv = document.createElement('div');
      messageDiv.classList.add('message', 'sent');
      messageDiv.innerHTML = '<p>' + messageText + '</p>';
      chatMessages.appendChild(messageDiv);
      messageInput.value = '';

      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
function sendMessage3() {
  var messageInput = document.querySelector('.chat-input input[type="text"]');
  var messageText = messageInput.value.trim();
  if (messageText !== '') {
      var chatMessages = document.querySelector('.chat-messages');
      var messageDiv = document.createElement('div');
      messageDiv.classList.add('message', 'sent');
      messageDiv.innerHTML = '<p>' + messageText + '</p>';
      chatMessages.appendChild(messageDiv);
      messageInput.value = '';

      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
function sendMessage4() {
  var messageInput = document.querySelector('.chat-input input[type="text"]');
  var messageText = messageInput.value.trim();
  if (messageText !== '') {
      var chatMessages = document.querySelector('.chat-messages');
      var messageDiv = document.createElement('div');
      messageDiv.classList.add('message', 'sent');
      messageDiv.innerHTML = '<p>' + messageText + '</p>';
      chatMessages.appendChild(messageDiv);
      messageInput.value = '';

      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function showDialog(dialogId) {
  var dialog = document.getElementById(dialogId);
  if (dialog) {
      dialog.style.display = 'block';
  }
}

function closeDialog(dialogId) {
  var dialog = document.getElementById(dialogId);
  if (dialog) {
      dialog.style.display = 'none';
  }
}

function selectUser() {
  document.getElementById('user_type').value = 'user';
  document.getElementById('moderator_fields').style.display = 'none';
}

function selectModerator() {
  document.getElementById('user_type').value = 'moderator';
  document.getElementById('moderator_fields').style.display = 'block';
}

function showConfirmation() {
  var userType = document.getElementById('user_type').value;
  if (userType === 'moderator') {
    document.getElementById('overlay').style.display = 'flex';
    return false;
  }
  return true;
}

function editText(textContentId, editBtnId) {
  var textContent = document.getElementById(textContentId);
  var text = textContent.innerText;
  var input = document.createElement("input");
  input.type = "text";
  input.value = text;
  input.id = textContentId;
  var container = textContent.parentNode;
  container.replaceChild(input, textContent);

  var editBtn = document.getElementById(editBtnId);
  editBtn.innerText = "✓";
  editBtn.onclick = function() {
    saveText(input, editBtnId);
  };
}

function saveText(input, editBtnId) {
  var text = input.value;
  var textContent = document.createElement("p");
  textContent.id = input.id;
  textContent.style.fontSize = "20px";
  textContent.innerText = text;
  var container = input.parentNode;
  container.replaceChild(textContent, input);

  var editBtn = document.getElementById(editBtnId);
  editBtn.innerText = "✎";
  editBtn.onclick = function() {
    editText(textContent.id, editBtnId);
  };
}

function cancelSubscription() {
  if (confirm("Вы уверены, что хотите отменить подписку?")) {
    alert("Подписка отменена.");
  }
}

function togglePopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}

function editNeeds() {
  var checkboxes = document.querySelectorAll('.needs-list input[type=checkbox]');
  checkboxes.forEach(checkbox => {
    checkbox.disabled = false;
  });
  document.querySelector('.needs .edit-button').style.display = 'none';
  document.querySelector('.needs .save-button').style.display = 'inline-block';
}

function saveNeeds() {
  var checkboxes = document.querySelectorAll('.needs-list input[type=checkbox]');
  checkboxes.forEach(checkbox => {
    checkbox.disabled = true;
  });
  document.querySelector('.needs .edit-button').style.display = 'inline-block';
  document.querySelector('.needs .save-button').style.display = 'none';
}