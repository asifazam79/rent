<template>
  <div class="login">
    <h1>Login Form</h1>
    <fieldset id="login">
      <legend>Login form</legend>
      <div class="errorBox" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors">
            <a :href="`#${Object.keys(error)[0]}`">{{ Object.values(error)[0] }}</a></li>
        </ul>
      </div>

      <label for="lastName" id="lastNameLabel">Last Name</label>
      <p class="hintText" id="lastNameHint">Between 1 and 50 characters</p>
      <input id="lastName" type="text" v-model="lastName" name="lastName" maxlength="50" aria-labelledby="lastNameLabel" aria-describedby="lastNameHint" />
      <label for="dateOfBirth" id="dobLabel">Date of birth</label>
      <p class="hintText" id="dobHint">Date of birth can be in format DD/MM/YYYY or DD.MM.YYYY or DD-MM-YYYY, cover leap year, not over 100 years old and not in the past</p>
      <input id="dateOfBirth" name="dateOfBirth" v-model="dateOfBirth" type="text" aria-labelledby="dobLabel" aria-describedby="dobHint" />
      <label for="postCode" id="postCodeLabel">Postcode</label>
      <p class="hintText" id="postCodeHint">Postcode must be a valid UK postcode</p>
      <input id="postCode" name="postCode" v-model="postCode" type="text" aria-labelledby="postCodeLabel" aria-describedby="postCodeHint" />
      <button type="submit" @click="checkForm($event);">Continue</button>
    </fieldset>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "LoginForm",
  data () {
    return {
      errors: [],
      validationPatterns: {
        lastName: /^.{1,50}$/,
        dateOfBirth: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        postCode: /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/
      }
    };
  },
  computed: {
    lastName: {
      set (val){
        store.commit('setLastName', val)
      },
      get() {
        return store.state.lastName
      }
    },
    dateOfBirth: {
      set (val){
        store.commit('setDateOfBirth', val)
      },
      get() {
        return store.state.dateOfBirth
      }
    },
    postCode: {
      set (val){
        store.commit('setPostCode', val)
      },
      get() {
        return store.state.postCode
      }
    }
  },
  methods: {
    checkForm(e) {
      this.errors = [];
      // Throw error if nothing is filled
      if (store.state.lastName === '') {
        this.errors.push({ lastName: 'Last name required.' });
      }
      if (store.state.dateOfBirth === '') {
        this.errors.push({ dateOfBirth: 'Date of birth required.' });
      }
      if (store.state.postCode === '') {
        this.errors.push({ postCode: 'Post code required.' });
      }
      // Check if last name is not between 1 and 50 characters
      if (store.state.lastName !== '' && !this.validationPatterns.lastName.test(store.state.lastName)) {
        this.errors.push({ lastName: 'Please enter last name between 1 and 50 characters' });
      }
      // Check if entered date is a valid date
      if (store.state.dateOfBirth !== '' && !this.validationPatterns.dateOfBirth.test(store.state.dateOfBirth)) {
        this.errors.push({ dateOfBirth: 'Please enter a valid date' });
      }
      // Check if postCode is a valid UK postcode
      if (store.state.postCode !== '' && !this.validationPatterns.postCode.test(store.state.postCode)) {
        this.errors.push({ postCode: 'Please enter a valid UK postcode' });
      }

      // Move to next page when all conditions are met
      if (store.state.lastName && this.validationPatterns.lastName.test(store.state.lastName) &&
          store.state.postCode && this.validationPatterns.postCode.test(store.state.postCode) &&
          store.state.dateOfBirth && this.validationPatterns.dateOfBirth.test(store.state.dateOfBirth)) {
            this.$router.push({path: '/contact-details'});
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
  }

  label {
    font-family: arial,sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25;
    color: #0b0c0c;
    display: block;
    margin-bottom: 0;
  }

  input {
    font-family: arial,sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25;
    box-sizing: border-box;
    width: 40%;
    height: 2.5rem;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
  }
  @media only screen and (min-width: 500px ) and (max-width: 767px) {
    input {
      width: 80%;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 959px){
    input {
      width: 60%;
    }
  }
  @media only screen and (max-width: 500px) {
    input {
      width: 100%;
    }
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
    margin: 22px 0;
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
  .hintText {
    color:#AAA;
    margin-top: 5px;
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
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
</style>