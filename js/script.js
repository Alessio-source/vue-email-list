var app = new Vue({
  el: '#root',
  data: {
    emails: []
  },
  mounted: function () {
    var questo = this;
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        questo.emails.push(response.data.response);
      });
    };
  }
})
