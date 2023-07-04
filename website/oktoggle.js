function toggleTests() {
    var peopleTable = document.getElementById('oknav1');
    var testsTable =  document.getElementById('oknav2');

    var peopleSetting = peopleTable.style.display;
    var testsSetting = testsTable.style.display;

    if (peopleSetting == 'inline-block') {
      peopleTable.style.display = 'none';
      testsTable.style.display = 'inline-block';
    }
    else {
      peopleTable.style.display = 'inline-block';
      testsTable.style.display = 'none';
    }
  }