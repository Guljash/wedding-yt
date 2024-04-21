<template>
  <div class="wrapper">
    <section class="light p-30">
      <div class="adaptive-display-l-gr-head">
        <div class="w-85 main-head">
          <h1>ЯНА<span>&</span>АЛЕКСЕЙ</h1>
          <h2>06.07.2024</h2>
        </div>
        <picture>
          <source srcset="@/assets/mainPhoto-s.jpg" media="(max-width: 767px)">
          <source srcset="@/assets/mainPhoto-m.jpg" media="(max-width: 1023px)">
          <img srcset="@/assets/mainPhoto-l.jpg" alt="Exterior">
        </picture>
        <div>
          <h3 class="w-85">{{ parseNamesByUrl.name }}!</h3>
          <p class="w-85 p-15">Мы счастливы пригласить {{ parseNamesByUrl.pronoun }} на нашу свадьбу, этот особенный день мы хотим провести в кругу самых близких нам людей</p>
          <div class="w-85">
            <img src="@/assets/heartLarge.png" alt="heart">
          </div>
        </div>
      </div>
    </section>
    <section class="p-30 dark">
      <div class="adaptive-section">
        <h3 class="w-85 p-24-bot">Праздничный банкет</h3>
        <div class="w-85 adaptive-display-s">
          <span class="mulish600">15:20</span><span class="mulish300"> — праздничный ужин в банкетном зале “Закольцово”</span>
        </div>
        <div class="df f-dir-r s-btw w-85 ta-l adaptive-dg">
          <div class="adaptive-display-m">
            <div class="w-85 p-30">
              <span class="mulish600">15:20</span><span class="mulish300"> — праздничный ужин в банкетном зале “Закольцово”</span>
            </div>
            <div class="w-85 p-30 ta-l mulish300">
              <p>Витебская обл., Витебский р-он,</p>
              <p>Вороновский с/с, 89,5 км</p>
            </div>
          </div>
          <div class="p-24">
            <picture>
              <source srcset="@/assets/int-s.jpg" media="(max-width: 767px)">
              <source srcset="@/assets/int-m.jpg" media="(max-width: 1023px)">
              <img @click="showSingle('/wedding-yt/img/int-l.bba88583.jpg')" srcset="@/assets/int-l.jpg" alt="Interior">
            </picture>
          </div>
          <div>
            <picture>
              <source srcset="@/assets/ext-s.jpg" media="(max-width: 767px)">
              <source srcset="@/assets/ext-m.jpg" media="(max-width: 1023px)">
              <img @click="showSingle('/wedding-yt/img/ext-l.aa33fd2c.jpg')" srcset="@/assets/ext-l.jpg" alt="Exterior">
            </picture>
          </div>
        </div>
        <div class="w-85 ta-l mulish300 adaptive-display-s">
          <p>Витебская обл., Витебский р-он,</p>
          <p>Вороновский с/с, 89,5 км</p>
        </div>
      </div>
    </section>
    <section class="light p-30">  
      <div>
        <div class="df w-85">
          <h3>Сохраните дату</h3>
          <img src="@/assets/heartLarge.png" alt="heart">
        </div>
        <div class="w-85 adaptive-display-l">
          <img class="p-24" src="@/assets/datepick.svg" alt="date">
          <p class="w-100 p-30-bot ta-l">Дорогие гости, если ваш выбор подарка пал между цветами и алкогольным напитком, смело выбирайте то, что не завянет :)</p>
        </div>
        <div class="w-85 adaptive-display-l-gr">
          <img class="w-100" src="@/assets/dancePhoto.jpg" alt="dancePhoto">
          <div>
            <h3 class="w-85 ta-l welcome">Вы придёте? :)</h3>
            <p class="w-85 ta-l p-24">Очень ждём каждого гостя и просим отметиться в форме, чтобы мы точно понимали, сколько гостей будет.</p>
            <button class="w-100 p-15 main-btn mulish800">Перейти в форму</button>
          </div>
        </div>
      </div>
    </section>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      moveDisabled
      rotateDisabled
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useParseNames} from '@/uses/useParseNamesByUrl';

const visibleRef = ref(false)
const indexRef = ref(0) 
const imgsRef = ref<string[] | string>([])

const onShow = () => {
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}

const showSingle = (href: string) => {
      imgsRef.value = href
      onShow()
    }

const {parseNamesByUrl} = useParseNames()

onMounted(() => {
  console.log(parseNamesByUrl.value)
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  /* padding: 30px 0; */
}

section>div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 430px;
}

h1 {
  font-family: 'Cormorant Infant';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 20px;
  letter-spacing: 0.1em;
  color: #101D0F;
}

h2 {
  font-family: 'Cormorant Infant';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: #101D0F;
}

h3 {
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #101D0F;
}

p {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #101D0F;
}

h1 span {
  font-size: 30px;
  font-family: "Cormorant Infant", serif;
  font-weight: 400;
  font-style: normal;
}

.wrapper {
  overflow-x: hidden;
}

.light {
  background-color: #F1F2F5;
;
}
.dark {
  background-color: #E3E3E3;
}

.main-head {
  padding-top: 70px
}

.main-btn {
  background-color: #101D0F;
  color: #fff;
  text-decoration: underline;
}

.welcome {
  padding-top: 50px;
}

.df {
  display: flex;
  align-items: center;
  justify-content: center;
}

.s-btw {
  justify-content: space-between;
}

.f-dir-r {
  flex-direction: row-reverse;
}

.p-15 {
  padding: 15px 0;
}

.p-24 {
  padding: 24px 0;
}

.p-24-bot {
  padding-bottom: 24px;
}


.p-30 {
  padding: 50px 0;
}

.p-30-bot {
  padding-bottom: 50px;
}


.w-100 {
  width: 100%;
}

.w-85 {
  /* border: 1px solid black; */
  width: 85%;
}

.ta-l {
  text-align: left;
}

.mulish600 {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #101D0F;
}

.mulish300 {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #101D0F;
}

.mulish800 {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-decoration-line: underline;
  color: #FFFFFF;
}

.adaptive-crop {
  max-height: 340px;
  object-fit: cover;
  object-position: 0 0;
}

.adaptive-display-m {
  display: none;
}

@media screen and (min-width: 768px) {
  .adaptive-crop {
    max-height: 1000px;
  }

  section>div {
    max-width: 800px;
  }

  section img {
    max-width: 430px;
  }

  .adaptive-section img{
    cursor: pointer;
    max-width: 300px;
  }

  .adaptive-section>img{
    margin-left: 10px;
    max-width: 300px;
  }

  .adaptive-display-s {
    display: none;
  }

  .adaptive-display-m {
    display: block;
  }

  .adaptive-dg {
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .adaptive-dg :nth-child(1) {
    align-self: start;
  }

  .adaptive-dg :nth-child(1)>div {
    padding: 0 0 24px 0;
  }

  .adaptive-dg :nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 0;
    align-self: end;
    justify-self: end;
  }

  .adaptive-dg :nth-child(3) {
    align-self: end;
  }
}

@media screen and (min-width: 820px) {
  section>div {
    max-width: 800px;
  }

  section img {
    max-width: 600px;
  }

  .adaptive-section img{
    max-width: 330px;
  }
}

@media screen and (min-width: 1024px) {
  section>div {
    max-width: 1000px;
  }

  .adaptive-section img{
    max-width: 400px;
  }

  .adaptive-display-l {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
    padding-bottom: 100px;
  }

  .adaptive-display-l p {
    max-width: 300px;
  }

  .adaptive-display-l-gr {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding-bottom: 100px;
    align-items: center;
    gap: 60px;
  }

  .adaptive-display-l-gr button {
    max-width: 300px;
    float: left;
  }

  .adaptive-display-l-gr-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    gap: 50px;
  }

  .adaptive-display-l-gr-head div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 400px;
    justify-self: center;
  }

  .adaptive-display-l-gr-head p {
    width: 400px;
  }

  .adaptive-display-l-gr-head picture{
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .adaptive-display-l-gr-head picture img{
    width: 400px;
  }
}

@media screen and (min-width: 1600px) {
  section>div {
    max-width: 1400px;
  }

  .w-85 {
    width: 100%;
  }

  .adaptive-dg {
    width: 100%;
  }

  .adaptive-section img {
     max-width: 600px; 
  }

  .adaptive-display-l-gr-head {
    gap: 400px;
  }

  .adaptive-display-l-gr-head picture img{
    width: 600px;
  }

}
</style>

