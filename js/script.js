var app = new Vue({
  el: '#root',
  data: {
    emails: []
  },
  mounted: function () {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        app.emails.push(response.data.response);
      });
    };
  }
})
