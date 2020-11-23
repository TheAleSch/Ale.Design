
<template>
  <div class="work-history">
    <div v-for="item in historyItems" :key="item.id" class="item">
      <div class="period">
        <span
          ><span class="bold">{{ item.startMonth }}</span
          >{{ item.startYear }}</span
        >
        <span
          ><span class="bold">{{ item.endMonth }}</span
          >{{ item.endYear }}</span
        >
      </div>
      <div class="content">
        <h4>{{ item.title }}</h4>
        <h5>{{ item.company }}</h5>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workHistory",
  data: function () {
    return {
      historyItems: [
        {
          id: 1,
          company: "Platform Builders - Fintechs and banking",
          title: "Product Design Specialist",
          startMonth: "Apr",
          startYear: "20",
          endMonth: "Nov",
          endYear: "20",
          description:
            "At this position I worked in projects for some industrias such as retail and fintechs with big and multinational costumers such as Telefônica ( Vivo), Energisa, DPSP and others\n \
My responsibilities as a speacialist included:\n \
- Leading projects to increase it's delivery quality.\n \
- Sharing knowledge and mentoring the design team members.\n \
- Creating conceptual work for new products.\n \
- Find solutions for day-to-day interactions.\n \
- Train and disseminate best practices",
        },
        {
          id: 2,
          company: "Xerpa - Growth Squad",
          title: "Product Designer",
          startMonth: "Nov",
          startYear: "19",
          endMonth: "Apr",
          endYear: "20",
          description:
            "Minha principal área de atuação foi no time de Growth onde tinha a missão era de criar experimentos rápidos, integrar toda a equipe do nosso squad expandido através de facilitações, com foco em melhorar as nossas métricas.",
        },
        {
          id: 3,
          company: "Zup Innovation - Fintechs and banking",
          title: "Product Designer ",
          startMonth: "Mar",
          startYear: "19",
          endMonth: "Nov",
          endYear: "19",
          description:
            "We create memorable experiences for the users of the products we develop.\n\
Worked in the Banking and Acquirer industries developing B2B and B2C solutions.",
        },
        {
          id: 4,
          company: "Bossabox Prolancer - Freelance",
          title: "Lead Product Designer",
          startMonth: "Cct",
          startYear: "18",
          endMonth: "Nov",
          endYear: "19",
          description:
            "I work as a freelancer designing digital products for startups and big industries. The scope of the projects range from discovery, product development and monitoring its evolution. The BossaBox model uses remote squads of freelancers to develop the projects.",
        },
        {
          id: 5,
          company: "Revelo",
          title: "Product Designer ",
          startMonth: "Jul",
          startYear: "18",
          endMonth: "Jan",
          endYear: "19",
          description:
            "At Revelo I worked on the development and iteration of the product features, also, worked on the project of the company design system.",
        },
        {
          id: 6,
          company: "Into Design Co.",
          title: "Product Designer & Co-founder ",
          startMonth: "Nov",
          startYear: "16",
          endMonth: "Nov",
          endYear: "18",
          description:
            "This company was founded by me and my best friend who I loved to spend time togheter, we had a clear goal use design  to transform digital services providing users the information they needed and having a great experience using our products and services.\n\
I learned alot about entrepeneurship and how to deal with clients and stakeholders.",
        },
                {
          id: 7,
          company: "Submarino Viagens",
          title: "Product Designer",
          startMonth: "Oct",
          startYear: "17",
          endMonth: "Jul",
          endYear: "18",
          description:
            "Researching, prototyping and testing new solutions focused in increase the user satisfaction, retain rate and sales.\n\
UX improvement of the mobile checkout experience resulting in a increase of 33% in sales.\n\
Working in the new experience of Submarino Viagens.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.work-history {
  border-left: 2px solid #000;
  display: flex;
  flex-direction: column;

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
    &:last-child {
      margin-bottom: 72px;
    }
    @media only screen and (max-width: $breakpoint-phone) {
      margin-bottom: 40px;
    }
    .period {
      margin-left: -2px;
      background: #ffffff;
      border: 2px solid #000000;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 40px;
      width: 144px;
      padding: 8px;
      span {
        display: block;
        font-size: 16px;
        line-height: 200%;
      }
      .bold {
        font-weight: 700;
        display: inline;
        padding-right: 4px;
      }
    }

    .content {
      margin-top: 24px;
      margin-left: 24px;
      max-width: 650px;
      h4 {
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
      }
      h5 {
        margin-top: 8px;
        font-size: 18px;
        line-height: 150%;
        color: #606060;
        @media only screen and (max-width: $breakpoint-phone) {
          margin-top: 0;
        }
      }
      p {
        margin-top: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 160%;
        color: #000;
        white-space: pre-wrap;
        @media only screen and (max-width: $breakpoint-phone) {
          text-align: left;
          font-size: 13px;
          margin-top: 16px;
        }
      }
    }
  }
}
</style>