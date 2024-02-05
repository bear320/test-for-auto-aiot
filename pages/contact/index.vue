<template>
  <LayoutIntroduction :data="intro" />
  <LayoutBreadcrumb />
  <div class="container" style="padding: 0 1.5rem">
    <ol class="rule-wrapper">
      <li v-for="(rule, index) in ruleList" :key="index" class="rule">{{ rule }}</li>
    </ol>
  </div>

  <div class="container">
    <form class="form-wrapper" @submit.prevent="handleSubmit" ref="formRef">
      <label for="brand-company" class="brand-company-wrapper">
        <p>品牌 Brand / 公司 Company <Icon name="lucide:asterisk" /></p>
        <input
          v-model.trim="formData.brandCompany"
          type="text"
          name="brand-company"
          id="brand-company"
          placeholder="奧圖數位互動科技有限公司"
          required
        />
      </label>
      <label for="position" class="position-wrapper">
        <p>職稱 Position</p>
        <input
          v-model="formData.position"
          type="text"
          name="position"
          id="position"
          placeholder="行銷企劃"
        />
      </label>
      <label for="contact-person" class="contact-person-wrapper">
        <p>聯絡人 Contact person <Icon name="lucide:asterisk" /></p>
        <input
          v-model.trim="formData.contactPerson"
          type="text"
          name="contact-person"
          id="contact-person"
          placeholder="王小明"
          required
        />
      </label>
      <label for="email" class="email-wrapper">
        <p>電子郵件 E-Mail <Icon name="lucide:asterisk" /></p>
        <input
          v-model.trim="formData.email"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
        />
      </label>
      <label for="contact-number" class="contact-number-wrapper">
        <p>聯絡電話 Contact number <Icon name="lucide:asterisk" /></p>
        <input
          v-model.trim="formData.contactNumber"
          type="tel"
          name="contact-number"
          id="contact-number"
          placeholder="0912-345-678"
          pattern="(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})"
          required
        />
      </label>
      <label for="extension" class="extension-wrapper">
        <p>分機號碼 Extension</p>
        <input
          v-model.trim.number="formData.extension"
          type="number"
          name="extension"
          id="extension"
          inputmode="numeric"
          pattern="[0-9]*"
          placeholder="1234"
        />
      </label>
      <label for="subject" class="subject-wrapper">
        <p>信件主旨 Subject <Icon name="lucide:asterisk" /></p>
        <input
          v-model.trim="formData.subject"
          type="text"
          name="subject"
          id="subject"
          placeholder="請輸入信件主旨"
          required
        />
      </label>
      <label for="" class="content-wrapper">
        <p>詢問內容 Contents <Icon name="lucide:asterisk" /></p>
        <textarea
          v-model="formData.contents"
          name="content"
          id="content"
          placeholder="請輸入詢問內容"
          required
        ></textarea>
      </label>
      <p class="tip">* 為必填欄位</p>
      <button type="submit" class="btn-submit">
        送出表單
        <Icon name="fluent:mail-24-regular" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { IIntro, IFormData } from '@/utils/interface';
import { useToast } from 'vue-toastification';

// 通知
const toast = useToast();

// metadata
definePageMeta({
  name: '商洽聯繫'
});

// SEO
useSeoMeta({
  title: '商洽聯繫',
  ogTitle: '商洽聯繫',
  description: '如有相關業務合作及任何問題，歡迎填寫表單與我們聯絡。',
  ogDescription: '如有相關業務合作及任何問題，歡迎填寫表單與我們聯絡。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary'
});

// intro
const intro = ref<IIntro>({
  title: '商洽聯繫',
  engTitle: 'CONTACT US',
  description: '如有相關業務合作及任何問題，歡迎填寫表單與我們聯絡。',
  cover: 'https://i.ibb.co/Pjhsnn9/ryan-stone.webp'
});

// 注意事項
const ruleList = ref<string[]>([
  '請同意授權本單位將您的個資交付內部其他單位，此個資包含：姓名、聯絡電話及 E-Mail。除本公司之外，相關個資將不會交付給任何其他機構或第三人。',
  '您的個資僅作為客戶服務使用，資料將永久保留。若對於本公司留存之您的個資有查詢、修改、製作副本或刪除的需求，請洽客服中心申請方式。',
  '若不同意並填寫必要的資料，恕無法提供本項服務。',
  '本人已詳細並確認充分理解本段注意事項之文字內容。'
]);

// 表單資料
const formData = ref<IFormData>({
  brandCompany: '',
  position: '',
  contactPerson: '',
  email: '',
  contactNumber: '',
  extension: null,
  subject: '',
  contents: ''
});

// ref: form & input
const formRef = ref<HTMLFormElement | null>(null);

// 提交表單
const handleSubmit = async () => {
  const { data, pending, error, refresh } = await useFetch('http://35.201.185.5/send_email', {
    method: 'POST',
    body: {
      brandCompany: formData.value.brandCompany,
      position: formData.value.position === '' ? '未填寫' : formData.value.position,
      contactPerson: formData.value.contactPerson,
      email: formData.value.email,
      contactNumber: formData.value.contactNumber,
      extension: formData.value.extension == null ? '未填寫' : formData.value.position.toString(),
      subject: formData.value.subject,
      contents: formData.value.contents
    },
    server: false,
    watch: false
  });

  if (!error.value) {
    // 通知
    toast.success('表單提交成功！');

    // 清除表單
    formRef.value!.reset();
  } else {
    toast.error('表單提交失敗，請再次嘗試！');
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.rule-wrapper {
  padding: 1.5rem;
  padding-right: 0;
  list-style-type: decimal;
  list-style-position: inside;

  .rule {
    margin: auto;
    width: clamp(280px, 100%, 992px);
    color: var(--text-color-3);
    font: var(--h5);
    line-height: 2;
    text-align: justify;
    list-style-position: outside;
  }
}

.form-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 5rem;
  row-gap: 2.5rem;
  padding: 3rem 5rem;
  border-radius: 1rem;
  border: solid 2px transparent;
  background-color: var(--background-color);
  background-clip: padding-box;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    z-index: -1;
  }

  @include media(992) {
    column-gap: 3rem;
    row-gap: 2rem;
    padding: 2rem;
  }

  @include media(768) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 3rem;
  }

  @include media(480) {
    padding: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    p {
      font: var(--h4);

      svg {
        color: var(--primary);
      }
    }

    input,
    textarea {
      all: unset;
      border-bottom: 1px solid #000;
      color: var(--text-color-3);
      font: var(--h5);
      line-height: 2;
      cursor: text;

      &::placeholder {
        color: var(--divider-color);
      }

      &:invalid {
        border-bottom-color: var(--primary);
        color: var(--primary);
      }

      &:focus {
        border-bottom-color: var(--tertiary);
        color: var(--tertiary);
      }
    }

    textarea {
      width: 100%;
      height: 10rem;
    }

    &.subject-wrapper {
      grid-column: span 2;
    }

    &.content-wrapper {
      grid-column: span 2;
    }
  }

  .tip {
    color: var(--primary);
  }

  .btn-submit {
    --gap: 1rem;
    justify-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--gap) / 4);
    padding: 0.25rem calc(var(--gap) / 2) 0.25rem var(--gap);
    width: fit-content;
    height: fit-content;
    border-radius: 50px;
    border: 2px solid var(--text-color-2);
    background-color: var(--text-color-2);
    color: #fff;
    font: var(--h6);
    cursor: pointer;

    svg {
      display: inline-block;
      width: calc(var(--h6-font-size) * var(--line-height));
      aspect-ratio: 1 / 1;
      color: var(--secondary);
    }
  }
}
</style>
