export default defineComponent({
  async run({ steps, $ }) {

    const current = new Date(Date.now()),
    currentHour = current.getHours(),
    // Pipedream cronjobs run in UTC time
    easternTimeHour = currentHour - 4,
    waterHour = easternTimeHour >= 8 && easternTimeHour <= 17,
    ntfyTopic = steps.get_record_keys.$return_value.values[0]
    
    if (waterHour) {
      let response = await fetch(ntfyTopic, {
      method: 'POST',
      body: 'Keep a healthy mind and body. Pause whatever you\'re doing and drink a glass of water.',
      headers: {
        'Title': 'Reminder to Drink Water',
      }
    })
    }

  },
})
