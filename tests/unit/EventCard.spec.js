import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

describe('EventCard.vue', () => {
  it('renders EventCard', () => {
    const event = {
      id: 2,
      time: '12:00PM',
      date: 'September 29th, 2022',
      title: 'Coaching Little League'
    };

    const wrapper = mount(EventCard, {
      props: {
        event
      }
    });

    mount(wrapper);
  })
})
