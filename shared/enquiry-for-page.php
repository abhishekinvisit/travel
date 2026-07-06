
<script async src="https://salesmax.ai/formdata/js/index.js"></script>

<script>
window.salesmaxDataLayer = window.salesmaxDataLayer || [];
  function salesmax() {
    window.salesmaxDataLayer.push(arguments);
  }
  salesmax('form-id', 'enquirypopup');
  salesmax('account', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMDgyNjExOS1mODQ1LTRjYzMtYmU1MC1iNzIwNmY4N2IxY2UiLCJzdWIiOiIyMWE5ODgwMC1iNDJkLTRmOWEtYjg5Ny0wOTA3MWY3MzI3MmUiLCJpYXQiOjE3MzM1NTI5MTh9.Jo5XSePXzlQoGaeqwU3NmQmYXYjusaqEs5Obojirmzg');
</script>

<form  action="send.php" method="post" target="_blank" id="enquirypopup">
    <div class="holder">
      <div class="column">
        <label class="label">Name</label>
        <input type="text" class="inputText"  placeholder="Type here..." name="first_name" required />
        </div>
      <div class="column">
        <label class="label">Phone</label>
        <input type="tel" class="inputText" placeholder="99xxxxx7x5" name="mobile_no" required minlength="10" maxlength="14" pattern="[0-9]{10}"/>
        </div>
      </div>
    <div class="clearfix"></div>
    <div class="form-row">
      <label class="label">Destination</label>
      <input type="text" class="inputText" placeholder="E.g.. Manali" name="destination" required />
      </div>
    <div class="holder">
      <div class="column">
        <label class="label">No. Of Travelers</label>
        <input type="number" class="inputText" placeholder="Type here..." name="no_of_travelers" />
        </div>
      <div class="column">
        <label class="label">Date Of Travel</label>
        <!--<input type="text" class="inputText" placeholder="DD/MM/YYY" name="travel_date" required />-->
        <input type="date" class="inputText" name="travel_date" style="background:#fff;" required pattern="\d{4}-\d{2}-\d{2}" />
        </div>
      </div>
    <div class="clearfix"></div>
    <input type="submit" name="submit" value="Send Enquiry" class="submitButton" id="addEventListener">
    <div class="clearfix"></div>
    </form>