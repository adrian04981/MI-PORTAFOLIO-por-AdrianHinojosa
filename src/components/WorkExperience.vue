<template>
  <section id="workExperience" class="work-experience py-5 animate-skills">
    <div class="container">
      <h2 class="mb-5 text-center">{{ $t('workExperience') }}</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="experience in experiences" :key="experience.id">
          <div class="timeline-icon">
            <i class="fas fa-briefcase"></i>
          </div>
          <div class="timeline-content">
            <h5 class="timeline-title">{{ experience.title }}</h5>
            <p class="timeline-date">{{ experience.date }}</p>
            <p class="timeline-description">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: this.$t('assistantTitle1'),
          date: this.$t('assistantDate1'),
          description: this.$t('assistantDescription1')
        },
        {
          id: 2,
          title: this.$t('assistantTitle2'),
          date: this.$t('assistantDate2'),
          description: this.$t('assistantDescription2')
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

.work-experience {
  color: #fff;
  padding: 60px 0;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #fff;
}

.timeline {
  position: relative;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #fff;
  margin-left: -2px;
}

.timeline-item {
  position: relative;
  margin: 20px 0;
}

.timeline-item:after {
  content: '';
  display: table;
  clear: both;
}

.timeline-icon {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: #fff;
  color: #728C14;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  z-index: 100;
}

.timeline-content {
  width: 45%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
  color: #333;
}

.timeline-content:before {
  content: '';
  position: absolute;
  top: 20px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline-item:nth-child(odd) .timeline-content {
  left: 0;
}

.timeline-item:nth-child(odd) .timeline-content:before {
  right: -15px;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #fff;
}

.timeline-item:nth-child(even) .timeline-content {
  left: 55%;
}

.timeline-item:nth-child(even) .timeline-content:before {
  left: -15px;
  border-width: 10px 15px 10px 0;
  border-color: transparent #fff transparent transparent;
}

.timeline-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-bottom: 5px;
}

.timeline-date {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #666;
  margin-bottom: 10px;
}

.timeline-description {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

@media (max-width: 767px) {
  .timeline:before {
    left: 10%;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    width: 90%;
    left: 5%;
  }

  .timeline-item:nth-child(even) .timeline-content:before,
  .timeline-item:nth-child(odd) .timeline-content:before {
    left: 10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
  }
}
</style>
