<template>
  <div class="contact">
    <a class="backLink" href="/">&lt; Back to login page</a>
    <h1>Contact details</h1>
    <dl title="contactInformation">
      <dt>UK mobile number</dt>
      <dd><a href="javascript:void(0)" @click="getCode();">+44 75 7000 0000</a></dd>
      <dt>UK landline number</dt>
      <dd><a href="javascript:void(0)" @click="getCode();">+44 1753 000 000</a></dd>
      <dt>Email address</dt>
      <dd><a href="javascript:void(0)" @click="getCode();">peter.jones@abc.com</a></dd>
    </dl>
    <div v-if="overlayStatus" class="overlay" ref="overlay">
      <a class="closeOverlay" href="javascript:void(0)" @click="closeOverlay();">x</a>
      <div class="getCode">
        <h2>Please enter 4 digits code</h2>
        <div class="errorBox" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">
              <a :href="`#${Object.keys(error)[0]}`">{{ Object.values(error)[0] }}</a>
            </li>
          </ul>
        </div>
        <fieldset>
          <legend>Enter code</legend>
          <label for="factorCode">Enter your code</label>
          <input id="factorCode" v-model="factorCode" name="factorCode" maxlength="4" />
          <button type="submit" @click="checkForm($event);">Continue</button>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ContactDetails",
    data() {
        return {
            overlayStatus: false,
            errors: [],
            factorCode: '',
            hardCodedFactorCode: '0000'
        };
    },
    methods: {
        getCode () {
          this.overlayStatus = true;
        },
        closeOverlay () {
          this.overlayStatus = false;
        },
        checkForm(e) {
          this.errors = [];
          // Throw error if nothing is filled
          if (this.factorCode === '') {
            this.errors.push({ factorCode: 'Factor code required.' });
          }
          // Check if factor code is filled in correctly
          if (this.factorCode !== '' && this.factorCode !== this.hardCodedFactorCode) {
            this.errors.push({ factorCode: 'Please enter correct factor code.' });
          }

          // Move to next page when all conditions are met
          if (this.factorCode && this.factorCode === this.hardCodedFactorCode) {
                this.$router.push({path: '/welcome'});
          }

          e.preventDefault();
        }
    }
};
</script>

<style scoped>
  legend {
    display: none;
  }
  h1 {
    color: #107433;
    font-family: arial, sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.09375;
    display: block;
    margin-top: 0;
    margin-bottom: 30px;
    clear: both;
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
  }
  .getCode {
    padding: 20px;
    background-color: #FFF;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 0.5em;
    position: relative;
    top: 30%;
  }
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  h2 {
    color: #107433;
    font-family: arial, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.09375;
    display: block;
    margin-top: 0;
    margin-bottom: 30px;
  }

  label {
    font-family: arial,sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }

  input {
    font-family: arial,sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25;
    box-sizing: border-box;
    width: 50%;
    height: 2.5rem;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
  }
  button {
    width: auto;
    font-family: arial,sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875;
    box-sizing: border-box;
    display: block;
    position: relative;
    margin: 22px 0 0 0;
    padding: 8px 10px 7px;
    border: 2px solid transparent;
    border-radius: 0.3em;
    color: #fff;
    background-color: #107433;
    box-shadow: 0 2px 0 #002d18;
    text-align: center;
    cursor: pointer;
  }
  button:hover {
    background-color: #46be69;
  }
  .closeOverlay {
    font-weight: 600;
    font-size: 2em;
    padding: 5px 15px;
    border: 2px solid #FFF;
    position: fixed;
    top: 20px;
    right: 20px;
    color: #FFF;
    text-decoration: none;
  }
  dl {
    float: left;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #AAA;
    margin: 0 0 20px 0;
    width: 100%;
  }
  dl dt {
    font-weight: bold;
    float: left;
    clear: left;
    padding: 0 5px 10px 0;
  }
  dl dd {
    float: left;
    clear: right;
    margin: 0;
    padding: 0 0 10px 0;
  }
  .errorBox {
    color: #C00;
    font-weight: bold;
    padding: 20px;
    border: 2px solid #C00;
    margin-bottom: 20px;
  }
  .errorBox ul {
    margin-bottom: 0;
    padding-left: 0;
  }
  .errorBox ul li {
    list-style-type: none;
    margin: 0;
    padding: 0 0 5px 0;
  }
  .errorBox ul li a {
    color: #C00;
  }
  .backLink {
    font-weight: bold;
    margin-bottom: 15px;
    float: left;
  }
</style>