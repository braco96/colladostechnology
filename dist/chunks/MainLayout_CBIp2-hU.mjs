import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, f as renderScript, k as renderSlot, s as spreadAttributes, x as renderHead } from './astro/server_CQl11rBO.mjs';
import 'kleur/colors';
import { g as getImage } from './_astro_assets_CWhYovHd.mjs';
import { c as createSvgComponent } from './runtime_DowWAJzh.mjs';
import { i as icon } from './icon_Dcc4Zd8M.mjs';
import 'clsx';
/* empty css                        */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/braco/Escritorio/collados/src/images/social.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/braco/Escritorio/collados/src/images/social.png");
							return target[name];
						}
					});

const SITE = {
  title: "ScrewFast",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov"
};
const SEO = {
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc
};
const partnersData = [
  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        d="M-26.912 496.696c-2.812-5.011-7.55-7.83-13.31-7.83-7.824 0-15.236 5.018-15.236 13.383 0 7.21 5.357 10.577 11.255 13.108l3.563 1.514c4.47 1.853 8.926 4.254 8.926 9.807 0 5.422-3.974 10.094-9.54 10.094-5.559 0-10.087-4.124-10.015-9.814l-6.525 1.37c1.102 8.307 7.62 14.486 15.999 14.486 9.259 0 16.534-6.727 16.534-16.136 0-8.64-5.488-12.691-12.835-15.568l-3.7-1.442c-3.23-1.24-7.21-3.36-7.21-7.42 0-4.521 4.529-7.34 8.646-7.34 3.915 0 6.382 1.651 8.3 4.88l5.148-3.092zm50.62-7.83c-14.825 0-27.104 12.15-27.104 26.974 0 15.373 12.142 26.974 27.104 26.974 14.955 0 27.11-11.601 27.11-26.974 0-14.824-12.286-26.974-27.11-26.974zm0 47.906c-11.184 0-20.651-9.128-20.651-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.659 9.54 20.659 20.932 0 11.804-9.474 20.932-20.658 20.932zm86.722-44.402c-3.909-2.401-8.515-3.504-13.043-3.504-15.236 0-27.516 11.947-27.516 27.248 0 14.962 12.221 26.7 26.968 26.7 4.528 0 9.61-1.312 13.59-3.648v-7.614c-3.849 3.432-8.716 5.357-13.793 5.357-11.53 0-20.318-9.677-20.318-21.004 0-11.457 8.854-21.134 20.455-21.134 4.868 0 9.944 1.788 13.657 5.083v-7.484zm35.782-2.401h-6.453v51.742h6.453V489.97zm32.227 51.742h27.789v-5.898h-21.343V516.25h20.723v-5.898h-20.723v-14.486h21.343v-5.898h-27.79v51.742zm68.113-45.844h12.286v-5.898h-31.02v5.898h12.287v45.844h6.447v-45.844zm61.38 32.873 5.898 12.971h6.935l-24.703-53.934-24.703 53.934h6.93l5.898-12.971h23.744zm-2.683-5.899h-18.387l9.2-20.932 9.187 20.932zm62.978-26.145c-2.805-5.011-7.549-7.83-13.31-7.83-7.817 0-15.23 5.018-15.23 13.383 0 7.21 5.351 10.577 11.25 13.108l3.569 1.514c4.463 1.853 8.92 4.254 8.92 9.807 0 5.422-3.981 10.094-9.54 10.094-5.56 0-10.088-4.124-10.016-9.814l-6.518 1.37c1.096 8.307 7.614 14.486 15.986 14.486 9.265 0 16.54-6.727 16.54-16.136 0-8.64-5.487-12.691-12.834-15.568l-3.706-1.442c-3.224-1.24-7.204-3.36-7.204-7.42 0-4.521 4.528-7.34 8.646-7.34 3.915 0 6.38 1.651 8.306 4.88l5.141-3.092zm65.425 45.015h27.783v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.783v51.742zm53.974-51.742v32.735c0 11.393 7.073 20.11 18.942 20.11 11.868 0 18.941-8.717 18.941-20.11V489.97h-6.453v30.536c0 8.443-2.538 16.267-12.488 16.267s-12.489-7.824-12.489-16.267V489.97h-6.453zm82.461 29.238c7.478-.894 12.417-7.067 12.417-14.485 0-4.933-2.466-9.814-6.792-12.352-4.118-2.336-9.057-2.401-13.65-2.401h-7.824v51.742h6.453v-21.89h2.669l15.236 21.89h7.823l-16.332-22.504zm-9.396-23.477h1.716c6.382 0 14.061 1.168 14.061 9.272 0 8.228-7.138 9.461-13.728 9.461h-2.049V495.73zm72.726-6.864c-14.817 0-27.104 12.15-27.104 26.974 0 15.373 12.15 26.974 27.104 26.974 14.969 0 27.111-11.601 27.111-26.974 0-14.824-12.28-26.974-27.11-26.974zm0 47.906c-11.177 0-20.65-9.128-20.65-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.658 9.54 20.658 20.932 0 11.804-9.474 20.932-20.658 20.932zm58.248-16.75h3.7c9.813 0 18.12-4.182 18.12-15.092 0-9.474-4.94-14.961-20.86-14.961h-7.413v51.742h6.453v-21.689zm0-24.292h1.71c6.38 0 14.067.966 14.067 9.063 0 8.235-7.138 9.468-13.728 9.468h-2.049v-18.53zm75.65 33.01 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.898-12.971h23.744zm-2.676-5.899h-18.387l9.187-20.932 9.2 20.932zm36.213 18.87h27.79v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.79v51.742zm85.274-12.971 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.899-12.971h23.744zm-2.682-5.899H865.05l9.2-20.932 9.194 20.932"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
      <path
        d="m46.878 308.584-16.352 30.354c-3.817-3.04-8.045-5.448-12.69-7.243-4.64-1.788-9.507-2.701-14.57-2.747-4.04 0-7.915 1.05-11.64 3.152-3.72 2.094-5.717 5.24-5.971 9.435.091 2.903 1.135 5.278 3.145 7.144 1.996 1.86 4.404 3.354 7.197 4.477 2.792 1.135 5.428 2.055 7.895 2.753l10.485 3.001c11.256 2.897 20.508 7.484 27.757 13.755 7.25 6.27 10.995 15.399 11.242 27.385.105 7.608-1.05 14.961-3.458 22.067-2.407 7.105-6.707 13.265-12.893 18.472-6.29 4.959-13.324 8.573-21.101 10.838a83.427 83.427 0 0 1-23.77 3.347c-10.023-.046-19.758-1.56-29.2-4.542-9.447-2.994-18.23-7.203-26.366-12.632l17.61-31.56a77.4 77.4 0 0 0 16.822 11.014c6.094 2.93 12.638 4.45 19.659 4.56 5.05.033 9.579-1.174 13.585-3.614 3.993-2.447 6.114-6.297 6.335-11.556-.143-3.634-1.644-6.564-4.508-8.808-2.865-2.238-6.218-4.007-10.062-5.292-3.836-1.292-7.294-2.323-10.374-3.073-8.646-2.193-16.169-4.744-22.55-7.66-6.394-2.924-11.347-7.067-14.87-12.45-3.517-5.376-5.305-12.86-5.357-22.439.085-10.244 2.453-19.13 7.099-26.674 4.646-7.549 11.046-13.389 19.216-17.538 8.156-4.15 17.558-6.251 28.2-6.31 8.156.046 16.645 1.155 25.447 3.34 8.815 2.193 16.821 5.208 24.038 9.044M126.403 333.346v117.435h-41.1V333.346H51.334v-33.153h109.03v33.153h-33.961zm121.493 55.69 49.687 61.705h-51.155l-38.79-57.914h-.425v57.914H166.12V300.154h61.438c10.511-.02 19.888 1.605 28.122 4.868 8.24 3.275 14.746 8.325 19.51 15.163 4.769 6.845 7.203 15.608 7.3 26.309-.039 10.622-3 19.829-8.886 27.632-5.886 7.804-14.453 12.77-25.708 14.91zm-40.683-58.92v37.544h3.987c4.574.072 9.03-.339 13.356-1.226 4.333-.894 7.908-2.689 10.753-5.403 2.832-2.708 4.307-6.76 4.411-12.143-.104-5.39-1.579-9.435-4.41-12.143-2.846-2.707-6.421-4.508-10.754-5.402a61.505 61.505 0 0 0-13.356-1.227h-3.987"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
      <path
        d="M396.617 424.616h-56.61l-10.91 26.165H285.5l60.798-150.588h44.872l59.552 150.588h-43.827l-10.277-26.165zm-11.112-29.956-16.769-47.938h-.424l-16.978 47.938h34.171zm109.683-6.44v32.357h5.246c4.228.104 8.861-.046 13.879-.463 5.037-.411 9.382-1.755 13.05-4.013 3.68-2.251 5.598-6.094 5.78-11.51-.17-5.925-2.088-10.029-5.774-12.319-3.674-2.297-8.098-3.576-13.272-3.843-5.167-.274-10.074-.346-14.707-.209h-4.202zm22.23 62.313h-63.323V299.945h58.71c14.25-.17 25.584 2.767 34.021 8.79 8.43 6.022 12.743 16.142 12.945 30.353.072 6.838-1.226 12.887-3.902 18.152-2.681 5.26-7.177 9.461-13.5 12.606v.398c11.256 1.507 19.464 5.631 24.638 12.358 5.168 6.727 7.726 15.386 7.654 25.982-.17 10.453-2.975 18.753-8.41 24.9-5.436 6.146-12.483 10.543-21.135 13.18-8.645 2.642-17.884 3.934-27.698 3.869zM495.188 329.9v29.16h4.62c5.696.182 10.76-.64 15.196-2.5 4.437-1.86 6.78-5.878 7.021-12.084-.085-4.515-1.331-7.816-3.72-9.904-2.4-2.082-5.408-3.4-9.043-3.954a64.784 64.784 0 0 0-11.138-.718h-2.936M683.94 424.616h-56.617L616.42 450.78h-43.605l60.798-150.588h44.878l59.546 150.588H694.21l-10.27-26.165zm-11.112-29.956-16.776-47.938h-.417l-16.991 47.938h34.184M817.732 366.688h81.567c.026 10.916-.965 21.239-2.962 30.954-1.99 9.729-6.394 19.242-13.18 28.566-7.856 10.23-17.363 17.728-28.52 22.491-11.158 4.763-23.386 7.119-36.696 7.067-16.684-.105-31.326-3.472-43.939-10.094-12.606-6.617-22.452-15.869-29.538-27.75-7.086-11.882-10.688-25.76-10.805-41.642.111-16.41 3.745-30.66 10.903-42.764 7.164-12.11 17.147-21.5 29.969-28.175 12.821-6.668 27.783-10.048 44.884-10.146 16.332-.006 30.576 3.497 42.719 10.505 12.142 7.014 21.662 17.559 28.566 31.633l-38.993 15.575c-2.871-7.282-7.197-13.076-13.004-17.37-5.8-4.293-12.86-6.492-21.18-6.596-9.017.163-16.58 2.57-22.674 7.223-6.094 4.645-10.688 10.577-13.774 17.78-3.093 7.203-4.639 14.714-4.645 22.537.013 7.928 1.618 15.464 4.808 22.602 3.191 7.132 7.882 12.965 14.074 17.5 6.2 4.528 13.807 6.877 22.844 7.027 9.076-.006 16.606-2.192 22.615-6.564 6.01-4.372 9.513-10.91 10.518-19.6h-33.557v-30.759"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
    </svg>`,
    name: "first",
    href: "#"
  },
  {
    icon: `<svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 40"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        stroke="#6B7280"
        stroke-miterlimit="3.864"
        stroke-width=".851"
        d="M.492 38.141h149.015M.492.911h149.015"></path>
      <path fill="#6B7280" d="M.545 33.488h27.878V5.565H.545v27.923Z"></path>
      <path
        fill="#d4d4d4"
        d="m2.176 22.319 12.286-14.24 12.286 14.24H18.65l-4.188-5.026-4.188 5.026H2.176ZM2.176 23.436h8.098v1.395h8.377v-1.395h8.097v5.584H2.176v-5.584Z"
      ></path>
      <path
        fill="#6B7280"
        fill-rule="evenodd"
        d="M56.51 25.334c0-2.875 1.218-5.637 4.462-5.637 3.244 0 4.463 2.762 4.463 5.637 0 2.737-1.219 5.499-4.463 5.499-3.244 0-4.462-2.762-4.462-5.5Zm-3.612 0c0 4.738 2.99 8.534 8.074 8.534s8.074-3.796 8.074-8.534c0-4.878-2.99-8.673-8.074-8.673s-8.074 3.795-8.074 8.673ZM85.25 22.573c-.438-3.796-3.473-5.913-7.084-5.913-5.085 0-8.074 3.797-8.074 8.673 0 4.74 2.989 8.535 8.074 8.535 4.024 0 6.853-2.624 7.222-6.717H81.89c-.275 2.163-1.518 3.68-3.724 3.68-3.245 0-4.464-2.761-4.464-5.498 0-2.875 1.219-5.637 4.464-5.637 1.794 0 3.357 1.244 3.588 2.877h3.496ZM86.688 33.477h3.611V26.39h6.648v7.086h3.612V17.05h-3.612v6.304H90.3V17.05h-3.612v16.426ZM106.898 33.477h3.611V20.089h4.923V17.05h-13.457v3.038h4.923v13.388ZM116.847 33.477h3.611V17.05h-3.611v16.426ZM123.397 33.477h12.468v-3.035h-8.856v-4.027h7.959v-2.808h-7.959V20.09h8.672V17.05h-12.284v16.426Z"
        clip-rule="evenodd"></path>
      <path
        fill="#6B7280"
        d="M137.873 33.477h3.611V26.69h6.878v-2.807h-6.878V20.09h7.937V17.05h-11.548v16.426ZM37.73 33.49h3.608v-7.085h6.648v7.086h3.612V17.065h-3.612v6.303h-6.648v-6.303h-3.607v16.426Z"
      ></path>
    </svg>`,
    name: "Second",
    href: "#"
  },
  {
    icon: ` <svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 39"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <g clip-path="url(#n)">
        <path
          fill="#6B7280"
          d="M66.454 14.419v12.11s4.413 1.098 11.32 1.098c6.855 0 11.316-1.093 11.316-1.093V22.42s-4.793.943-11.364.943c-3.19 0-5.304-.375-6.44-.489 0-.992.003-3.792 0-4.793 1.272-.127 3.412-.493 6.488-.493 6.397.026 11.316.974 11.316.974v-4.146s-4.39-1.093-11.316-1.093c-6.977 0-11.32 1.097-11.32 1.097ZM94.464 27.356h4.955V13.55h-4.955v13.806ZM28.155 27.356h4.954V13.55h-4.954v13.806ZM56.17 27.351s-3.583-2.896-8.852-5.627c-1.468-.76-2.71-1.267-3.863-1.734v7.361h-4.797V13.576s4.06.786 8.669 3.176c5.269 2.73 8.847 5.378 8.847 5.378v-8.58h4.81V27.35H56.17ZM24.843 16.678l-12.29 11.045L.245 16.669l3.68-3.351s7.518 7.235 8.628 8.27c1.11-1.035 8.624-8.27 8.624-8.27l3.666 3.36ZM110.599 13.558h6.899c2.516-.004 4.098-1.284 4.679-1.896.586-.612 1.94-2.14 1.94-3.92V2.007c0-1.061.861-1.922 1.922-1.922h7.48c1.062 0 1.923.86 1.923 1.927v7.48a1.923 1.923 0 0 1-1.923 1.922h-5.736c-1.779 0-3.308 1.354-3.919 1.94-.612.58-1.892 2.162-1.897 4.68v6.898h-11.368V13.558Z"
        ></path>
        <mask
          id="b"
          width="27"
          height="28"
          x="123"
          y="12"
          maskUnits="userSpaceOnUse"
          style="mask-type:luminance"
        >
          <path fill="#fff" d="M123.16 12.746h26.765v26.843H123.16V12.746Z"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#6B7280"
            d="M149.755 19.605c0-1.826-.739-3.46-1.914-4.649-1.175-1.192-2.827-1.913-4.653-1.913-3.736 0-6.715 3.045-6.715 6.676 0 .664.288 1.922.288 2.46a5.18 5.18 0 0 1-5.177 5.177h-5.545a1.92 1.92 0 0 0-1.922 1.922v7.48c0 1.062.861 1.922 1.922 1.922h7.48c1.062 0 1.923-.86 1.923-1.922v-5.544a5.177 5.177 0 0 1 5.177-5.178c.537 0 1.796.289 2.455.289 3.635 0 6.681-2.98 6.681-6.72Z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="n">
          <path fill="#fff" d="M0 0h150v38.764H0z"></path>
        </clipPath>
      </defs>
    </svg>`,
    name: "Third",
    href: "#"
  },
  {
    icon: `<svg
      class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5"
      viewBox="0 0 100 42"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        fill="#6B7280"
        d="M77.466.414v6.157H36.751v8.093h1.356V7.885h40.729V.415h-1.37ZM58.693 19.465v5.686H55.4v3.195h-3.085v3.556H14.367v1.314h39.248v-3.57h3.1v-3.181h3.292v-7h-1.314Z"
      ></path>
      <path
        fill="#6B7280"
        d="M14.491 10.002h9.366l1.26.083s7.567.442 9.255 7.387c1.687 6.945-3.473 12.244-11.013 12.327-7.54.083-8.965 0-8.965 0v-1.162l.997-.083c.221-.042.428-.07.65-.097.207-.041.415-.083.609-.194.235-.124.4-.36.484-.608.083-.236.083-.47.083-.72 0-.083.014-.152.014-.235V13.184a5.03 5.03 0 0 0-.028-.457c-.014-.138-.028-.277-.055-.415a.9.9 0 0 0-.153-.304 1.063 1.063 0 0 0-.304-.305c-.124-.083-.249-.124-.387-.18a5.89 5.89 0 0 0-.969-.262 15.285 15.285 0 0 0-.844-.139v-1.12Zm6.074 1.425V26.09s-.139 1.605.968 2.048c1.107.442 3.085.401 4.233.11 1.149-.29 5.34-1.577 5.05-8.812-.29-7.222-6.17-8.093-7.512-8.093-1.342 0-2.74.083-2.74.083ZM40.459 11.178v-1.176h9.712s6.848-.139 6.516 5.395c-.332 5.534-7.07 5.825-7.706 5.797-.637-.028-2.31 0-2.31 0v4.634c0 .36 0 .72-.014 1.08 0 .276-.014.58.097.843.11.263.373.43.622.526.277.11.567.18.872.221.152.028.318.042.484.056.608.055.968 0 .968 0v1.231h-9.13v-1.162l1.369-.11c.124-.015.25-.042.36-.07.207-.055.442-.124.608-.249.167-.124.25-.318.305-.512.055-.193.11-.429.11-.65V12.921s.111-.609-.276-1.08c-.388-.497-2.587-.663-2.587-.663Zm6.24.166v8.467h1.535s4.565.166 4.648-4.013c.07-4.178-2.822-4.786-6.184-4.454ZM62.47 9.988h9.462s5.783-.29 6.835 3.597c1.051 3.901-2.601 5.672-3.016 5.838-.402.166-1.854.692-1.854.692l4.994 6.35s1.107 1.397 2.2 1.826c1.107.429 1.909.318 1.909.318v1.176h-5.728l-3.25-4.565-3.446-4.303h-2.02v5.907s-.082 1.204.623 1.453c.692.25 2.31.318 2.31.318V29.8h-9.061v-1.176s1.868-.042 2.393-.457c.47-.36.43-1.065.43-1.065v-14.29s.027-.831-.485-1.163c-.512-.318-2.31-.484-2.31-.484l.013-1.176Zm6.1 1.356v8.231h1.854s4.538.028 4.621-4.385c0-.346-.014-.706-.083-1.038a3.554 3.554 0 0 0-.277-.844 3.231 3.231 0 0 0-.415-.65 2.313 2.313 0 0 0-.54-.498 5.42 5.42 0 0 0-.608-.36 3.257 3.257 0 0 0-.609-.235 4.942 4.942 0 0 0-.65-.152c-.194-.028-.387-.056-.58-.07-.153-.013-.291-.027-.444-.027-.207 0-.415.014-.622.014-.263.014-.526.014-.789.014h-.858Z"
      ></path>
      <path
        fill="#6B7280"
        d="M25.089 13.432s-9.684-.608-17.64 7.277C-.504 28.581.008 38.35.008 38.35h1.508s-.498-9.145 7.014-16.657c7.526-7.526 16.518-6.89 16.518-6.89l.042-1.37ZM18.088 38.473l-1.065.07c-.014-.61-.249-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.222 1.107.138.194.346.29.608.29.416 0 .678-.276.775-.816l.982.056c-.069.525-.262.913-.58 1.19-.319.262-.72.4-1.19.4-.581 0-1.038-.193-1.398-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.527-1.604.345-.415.816-.623 1.424-.623 1.038 0 1.62.553 1.758 1.674ZM22.46 41.267c-.58 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.319-.43.789-.637 1.384-.637.608 0 1.065.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.319.443-.775.664-1.384.664Zm.028-3.638c-.54 0-.803.47-.803 1.411 0 .94.263 1.411.803 1.411.512 0 .774-.47.774-1.41 0-.942-.262-1.412-.774-1.412ZM30.484 36.855v4.344h-.872l-1.701-2.933v.152c.014.069.014.138.014.194v2.6h-.789v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014ZM36.516 37.809l-.871.29c-.111-.345-.36-.511-.734-.511-.4 0-.608.124-.608.387 0 .11.041.194.11.263.083.069.25.138.512.194.443.083.761.18.969.262.207.097.373.236.525.443.139.208.208.429.208.678 0 .387-.152.733-.457 1.024-.304.29-.747.429-1.342.429-.442 0-.83-.097-1.134-.305a1.419 1.419 0 0 1-.623-.899l.941-.208c.11.402.401.61.885.61.236 0 .402-.042.526-.14.11-.096.166-.193.166-.317a.343.343 0 0 0-.152-.29c-.11-.07-.304-.14-.595-.194-.553-.111-.94-.277-1.176-.47-.235-.195-.346-.485-.346-.873 0-.387.139-.705.415-.982.277-.263.664-.4 1.149-.4.83 0 1.383.331 1.632 1.009ZM42.23 36.855v.857h-1.08v3.486h-1.023v-3.486h-1.08v-.858h3.183ZM45.84 39.483V41.2h-1.023v-4.344h1.909c.346 0 .636.041.844.124.207.083.387.235.525.456.139.222.208.457.208.734 0 .526-.25.899-.747 1.12l.802 1.923h-1.12l-.664-1.715h-.734v-.014Zm0-1.854v1.107h.623c.207 0 .346-.014.443-.041a.476.476 0 0 0 .249-.194.563.563 0 0 0 .11-.332.563.563 0 0 0-.11-.332.47.47 0 0 0-.236-.18c-.082-.028-.248-.028-.47-.028h-.609ZM54.611 36.855v2.697c0 .443-.055.761-.152.983-.097.207-.29.387-.553.525-.263.139-.609.208-1.024.208-.415 0-.747-.056-.996-.18a1.201 1.201 0 0 1-.553-.526c-.125-.221-.18-.553-.18-.996v-2.698h1.107v2.698c0 .235.013.401.055.512.041.11.11.194.235.263a.82.82 0 0 0 .429.097c.194 0 .346-.028.47-.097a.505.505 0 0 0 .236-.25c.041-.11.055-.276.055-.525v-2.698h.871v-.014ZM61.086 38.473l-1.065.07c-.014-.61-.25-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.221 1.107.139.194.346.29.61.29.414 0 .677-.276.774-.816l.982.056c-.07.525-.263.913-.581 1.19-.318.262-.72.4-1.19.4-.58 0-1.037-.193-1.397-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.526-1.604.346-.415.816-.623 1.425-.623 1.038 0 1.619.553 1.757 1.674ZM66.578 36.855v.857H65.5v3.486h-1.037v-3.486h-1.08v-.858h3.196ZM70.175 36.855h-1.01v4.344h1.01v-4.344ZM74.838 41.267c-.581 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.318-.43.788-.637 1.383-.637.609 0 1.066.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.304.443-.775.664-1.383.664Zm.027-3.638c-.54 0-.802.47-.802 1.411 0 .94.263 1.411.802 1.411.512 0 .775-.47.775-1.41 0-.942-.263-1.412-.775-1.412ZM82.862 36.855v4.344h-.872l-1.702-2.933v.152c.014.069.014.138.014.194v2.6h-.788v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014Z"
      ></path>
    </svg>`,
    name: "Fourth",
    href: "#"
  }
];

const faviconSvgSrc = createSvgComponent({"meta":{"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"},"attributes":{"width":"512","height":"512","viewBox":"0 0 512 512","fill":"none"},"children":"\n<rect x=\"-0.00585938\" y=\"-0.000488281\" width=\"512\" height=\"512\" rx=\"100\" fill=\"#262626\" />\n<rect x=\"20.9297\" y=\"109.01\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 20.9297 109.01)\" fill=\"#FACC15\" />\n<rect x=\"100.982\" y=\"183.969\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 100.982 183.969)\" fill=\"#FACC15\" />\n<rect x=\"181.491\" y=\"259.354\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 181.491 259.354)\" fill=\"#FACC15\" />\n<rect x=\"261.998\" y=\"334.739\" width=\"62.4311\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 261.998 334.739)\" fill=\"#FACC15\" />\n<path d=\"M442.513 435.922C445.843 442.651 438.906 449.847 432.059 446.766L355.339 412.235C350.291 409.962 349.021 403.373 352.863 399.387L392.264 358.515C396.106 354.53 402.737 355.557 405.193 360.519L442.513 435.922Z\" fill=\"#FACC15\" />\n"});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$e = createAstro("https://screwfast.uk");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData,
    customDescription: null,
    customOgTitle: null
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData,
    customDescription = defaultProps.customDescription,
    customOgTitle = defaultProps.customOgTitle
  } = Astro2.props;
  const description = customDescription || meta;
  const ogTitle = customOgTitle || OG.title;
  const ogDescription = customDescription || OG.description;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const cleanPath = path.replace(/^\/(fr|en)\//, "/");
    const basePath2 = prefix ? `/${prefix}${cleanPath}` : cleanPath;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const cleanPath = fullPath.replace(/^\/(fr|en)\//, "/");
    const href = createHref(lang, prefix, cleanPath);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<meta charset="utf-8"><meta${addAttribute(description, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><link rel="manifest" href="/manifest.json"><link rel="sitemap" href="/sitemap-index.xml"><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><meta name="theme-color" content="#facc15">`;
}, "/home/braco/Escritorio/collados/src/components/Meta.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-hidden" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/home/braco/Escritorio/collados/src/components/ThemeIcon.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-hidden ring-zinc-500 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-hidden md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/home/braco/Escritorio/collados/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/braco/Escritorio/collados/src/components/ui/links/NavLink.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$EmailInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$EmailInput;
  const { label = Astro2.currentLocale === "fr" ? "Adresse e-mail" : "Email address", id, errorId } = Astro2.props;
  return renderTemplate`<!-- Container for the label, input, and validation message -->${maybeRenderHead()}<div> <!-- Label for the email input field --> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> <!-- Label for the email input field --> <div class="relative"> <!-- Email input field --> <input type="email"${addAttribute(id, "id")} name="email" autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(id, "aria-describedby")}> <!-- Hidden error icon --> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <!-- Validation message which is hidden by default --> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}>
Please include a valid email address so we can get back to you
</p> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/input/EmailInput.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$PasswordInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PasswordInput;
  const {
    label = "Password",
    forgot,
    id,
    errorId,
    content
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center justify-between"> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> ${forgot ? renderTemplate`<button class="rounded-lg text-sm font-medium text-orange-400 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-hidden dark:focus:ring-1" data-hs-overlay="#hs-toggle-between-modals-recover-modal">
Forgot password?
</button>` : ""} </div> <div class="relative"> <input type="password"${addAttribute(id, "id")} name="password" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(errorId, "aria-describedby")}> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}> ${content} </p> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/input/PasswordInput.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { label = Astro2.currentLocale === "fr" ? "Me rappeler" : "Remember me", id } = Astro2.props;
  return renderTemplate`<!-- Container for the checkbox and its label -->${maybeRenderHead()}<div class="flex items-center"> <!-- Checkbox input --> <div class="flex"> <input${addAttribute(id, "id")} name="remember-me" type="checkbox" class="pointer-events-none mt-0.5 shrink-0 rounded-sm border-neutral-200 text-neutral-600 focus:ring-yellow-400 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-yellow-400 dark:checked:bg-yellow-400 dark:focus:ring-offset-neutral-800"> </div> <!-- Label for the checkbox --> <div class="ms-3"> <label${addAttribute(id, "for")} class="text-sm text-neutral-800 dark:text-neutral-200">${label} ${renderSlot($$result, $$slots["default"])} </label> </div> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/input/Checkbox.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$AuthBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring-3 outline-hidden transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-hidden";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "/home/braco/Escritorio/collados/src/components/ui/buttons/AuthBtn.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$GoogleBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GoogleBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm dark:text-neutral-400 font-medium text-neutral-600 shadow-xs transition duration-300 focus-visible:ring-3 outline-hidden";
  const borderClasses = "border border-neutral-200 dark:border-neutral-700";
  const bgColorClasses = "bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  const googleSVG = `<svg
    class="h-auto w-4"
    width="46"
    height="47"
    viewBox="0 0 46 47"
    fill="none"
  >
    <path
      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
      fill="#4285F4"></path>
    <path
      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
      fill="#34A853"></path>
    <path
      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
      fill="#FBBC05"></path>
    <path
      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
      fill="#EB4335"></path>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${ringClasses}`, "class")}> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(googleSVG)}` })} ${title} </button>`;
}, "/home/braco/Escritorio/collados/src/components/ui/buttons/GoogleBtn.astro", void 0);

const $$LoginModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-login-modal",
    // Modal IDENTIFIER
    title: "Sign in",
    // Main HEADING
    subTitle: "Don't have an account yet?",
    // Sub-Heading TEXT
    registerBtn: "Sign up here",
    // Text for REGISTRATION BUTTON
    registerBtnDataHS: "#hs-toggle-between-modals-register-modal"
    // TARGET LINK for registration button
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <div class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-xs dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(config.registerBtnDataHS, "data-hs-overlay")}> ${config.registerBtn} </button> </p> </div> <div class="mt-5"> ${renderComponent($$result, "GoogleBtn", $$GoogleBtn, { "title": "Sign in with Google" })} <div class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
Or
</div> <!-- The container for the form --> <form> <!-- A grid layout for the form fields --> <div class="grid gap-y-4"> <!-- The email input field --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "login-email", "errorId": "login-email-error" })} <!-- The password input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "forgot": true, "id": "password", "errorId": "login-password-error", "content": "8+ characters required" })} <!-- The remember-me checkbox --> ${renderComponent($$result, "Checkbox", $$Checkbox, { "id": "remember-me" })} <!-- The sign-in button --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Sign in" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/LoginModal.astro", void 0);

const $$RegisterModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-register-modal",
    // Modal identifier
    title: "Sign up",
    // Main heading
    subTitle: "Already have an account?",
    // Sub-heading text
    loginBtn: "Sign in here",
    // Text for login button
    loginBtnDataHS: "#hs-toggle-between-modals-login-modal"
    // Target link for login button
  };
  return renderTemplate`<!-- Root element of the registration modal with the id and styling -->${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <div class="mt-7 max-h-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-xs dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <!-- Button to toggle login modal --> <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(config.loginBtnDataHS, "data-hs-overlay")}> ${config.loginBtn} </button> </p> </div> <!-- The form for user registration --> <div class="mt-5"> <!-- Google signup button --> ${renderComponent($$result, "GoogleBtn", $$GoogleBtn, { "title": "Sign up with Google" })} <!-- Dividing line with 'Or' text --> <div class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
Or
</div> <!-- Registration form --> <form> <div class="grid gap-y-4"> <!-- Email input field --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "register-email", "errorId": "register-email-error" })} <!-- Password input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "id": "create-password", "errorId": "register-password-error", "content": "8+ characters required" })} <!-- Password confirmation input field --> ${renderComponent($$result, "PasswordInput", $$PasswordInput, { "label": "Confirm Password", "id": "confirm-password", "errorId": "confirm-password-error", "content": "Password does not match the password" })} <!-- Checkbox with a label and a link for accepting the terms and conditions --> ${renderComponent($$result, "Checkbox", $$Checkbox, { "label": "I accept the ", ",": true, "id": "terms-agree" }, { "default": ($$result2) => renderTemplate` <a class="font-medium text-orange-400 decoration-2 hover:underline dark:text-orange-400 dark:focus:outline-hidden" href="#">Terms and Conditions</a> ` })} <!-- Submit button for the registration form --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Sign up" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/RegisterModal.astro", void 0);

const $$RecoverModal = createComponent(($$result, $$props, $$slots) => {
  const config = {
    id: "hs-toggle-between-modals-recover-modal",
    // Modal identifier
    title: "Forgot password?",
    // Main heading
    subTitle: "Remember your password?",
    // Sub-heading text
    loginBtn: "Sign in here",
    // Text for login button
    loginBtnDataHS: "#hs-toggle-between-modals-login-modal"
    // Target link for login button
  };
  return renderTemplate`<!-- Root element of the modal with id and styling -->${maybeRenderHead()}<div${addAttribute(config.id, "id")} class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"> <!-- Modal content container --> <div class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"> <div class="mx-auto w-full max-w-md p-6"> <!-- Actual box for the modal elements --> <div class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-xs dark:border-neutral-700 dark:bg-neutral-800"> <div class="p-4 sm:p-7"> <div class="text-center"> <h2 class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"> ${config.title} </h2> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${config.subTitle} <!-- Button that, when clicked, opens the login modal --> <button class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-hidden ring-zinc-500 hover:underline focus-visible:ring-3 dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-hidden"${addAttribute(config.loginBtnDataHS, "data-hs-overlay")}> ${config.loginBtn} </button> </p> </div> <div class="mt-5"> <!-- The form for password recovery --> <form> <div class="grid gap-y-4"> <!-- Email input field imported from EmailInput component --> ${renderComponent($$result, "EmailInput", $$EmailInput, { "id": "recover-email", "errorId": "recover-email-error" })} <!-- Reset password button imported from AuthBtn component --> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Reset password" })} </div> </form> </div> </div> </div> </div> </div> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/RecoverModal.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$LoginBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LoginBtn;
  const { title = "Log in" } = Astro2.props;
  const baseClasses = "flex items-center gap-x-2 text-base md:text-sm font-medium text-neutral-600 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden";
  const hoverClasses = "hover:text-orange-400 dark:hover:text-orange-300";
  const darkClasses = "dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:focus:outline-hidden";
  const mdClasses = "md:my-6 md:border-s md:border-neutral-300 md:ps-6";
  const txtSizeClasses = "2xl:text-base";
  const userSVG = `<svg
      class="h-4 w-4 shrink-0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>`;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`${baseClasses} ${hoverClasses} ${darkClasses} ${mdClasses} ${txtSizeClasses}`, "class")} data-hs-overlay="#hs-toggle-between-modals-login-modal"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(userSVG)}` })} ${title} </button>`;
}, "/home/braco/Escritorio/collados/src/components/ui/buttons/LoginBtn.astro", void 0);

const $$Authentication = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Login Button -->${renderComponent($$result, "LoginBtn", $$LoginBtn, {})} <!-- Login Modal --> ${renderComponent($$result, "LoginModal", $$LoginModal, {})} <!-- Register Modal --> ${renderComponent($$result, "RegisterModal", $$RegisterModal, {})} <!-- Password Recovery Modal --> ${renderComponent($$result, "RecoverModal", $$RecoverModal, {})}`;
}, "/home/braco/Escritorio/collados/src/components/sections/misc/Authentication.astro", void 0);

const navBarLinks$1 = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" }
];
const footerLinks$1 = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" }
    ]
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" }
    ]
  }
];
const socialLinks$1 = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/"
};
const enStrings = {
  navBarLinks: navBarLinks$1,
  footerLinks: footerLinks$1,
  socialLinks: socialLinks$1
};

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" }
];
const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" }
    ]
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" }
    ]
  }
];
const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#"
};
const frStrings = {
  navBarLinks,
  footerLinks,
  socialLinks
};

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BrandLogo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 521 226" fill="none"> <rect width="78.937" height="18.485" x="269" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 269 154.911)"></rect> <rect width="78.937" height="18.485" x="319" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 319 154.911)"></rect> <rect width="78.937" height="18.485" x="369.285" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 369.285 154.911)"></rect> <rect width="28.464" height="18.485" x="419.57" y="154.911" class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" rx="9.242" transform="rotate(-43.075 419.57 154.911)"></rect> <path class="fill-current text-yellow-500 dark:text-yellow-400" fill="currentColor" d="M499.804 128.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"></path> <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M141.808 83.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V112h-17.28V79.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896a34.47 34.47 0 0 1-.384 5.12h-50.048c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V45.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"></path> <path class="fill-current text-neutral-700 dark:text-neutral-300" fill="currentColor" d="M56.064 163.616H26.24V212H8.832V110.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 212h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 212Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 212c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V212Z"></path> </svg>`;
}, "/home/braco/Escritorio/collados/src/components/BrandLogo.astro", void 0);

const languages = {
  en: "English",
  fr: "Français"
};

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 dark:group-hover:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "/home/braco/Escritorio/collados/src/components/ui/icons/Icon.astro", void 0);

const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hs-dropdown relative inline-flex"> <button id="hs-dropdown-default" type="button" aria-label="Change language" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-1.5 py-1.5 text-sm font-medium text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-hidden"> ${renderComponent($$result, "Icon", $$Icon, { "name": "earth" })} <svg class="size-4 hs-dropdown-open:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> </button> <div class="hs-dropdown-menu duration left-[20%]! top-[98%]! mt-2 hidden transform-none! rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800 md:left-[90%]! md:top-[80%]!" aria-labelledby="hs-dropdown-hover-event"> ${// Map through the list of languages, creating a link for each language
  Object.entries(languages).map(([lang, label]) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-hidden dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"${addAttribute(`/${lang === "en" ? "" : lang}`, "href")}> ${label} </a>`)} </div> </div> ${renderScript($$result, "/home/braco/Escritorio/collados/src/components/ui/LanguagePicker.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/braco/Escritorio/collados/src/components/ui/LanguagePicker.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://screwfast.uk");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const homeUrl = Astro2.currentLocale === "fr" ? "/fr" : "/";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-hidden" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " ", " ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-hidden" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', " ", " ", ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-24" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`), renderComponent($$result, "Authentication", $$Authentication, {}), renderComponent($$result, "LanguagePicker", $$LanguagePicker, {}), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}));
}, "/home/braco/Escritorio/collados/src/components/sections/navbar&footer/Navbar.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-hidden ring-zinc-500 hover:bg-neutral-500/10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/braco/Escritorio/collados/src/components/ui/links/FooterSocialLink.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$EmailFooterInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = Astro2.currentLocale === "fr" ? "S'abonner" : "Subscribe",
    id = "footer-input"
  } = Astro2.props;
  const placeholder = Astro2.currentLocale === "fr" ? "Entrez votre email" : "Enter your email";
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <div class="w-full"> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-orange-400 focus:ring-orange-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300 caret-orange-400"${addAttribute(placeholder, "placeholder")}> </div> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-orange-400 p-3 text-sm font-bold text-neutral-50 outline-hidden ring-zinc-500 transition duration-300 hover:bg-orange-500 focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-hidden dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "/home/braco/Escritorio/collados/src/components/ui/forms/input/EmailFooterInput.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSection;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const sectionThreeTitle = Astro2.currentLocale === "fr" ? "Rester \xE0 jour" : "Stay up to date";
  const sectionThreeContent = Astro2.currentLocale === "fr" ? "Restez inform\xE9 des derniers outils et des offres exclusives." : "Stay updated with the latest tools and exclusive deals.";
  const crafted = Astro2.currentLocale === "fr" ? "Fabriqu\xE9 par" : "Crafted by";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-(--breakpoint-2xl)"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-hidden"> ${link.name} </a> ${section.section === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold text-neutral-50">
We're hiring!
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${sectionThreeTitle} </h3> <form> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. ${crafted} <a class="rounded-lg font-medium underline underline-offset-2 outline-hidden ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-hidden focus-visible:ring-3 dark:ring-zinc-200 dark:hover:text-neutral-300" href="https://www.gulamoff.dev/" target="_blank" rel="noopener noreferrer">gulamoff</a>.
</p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.facebook }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.x }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xFooter" })}` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.github }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "githubFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.google }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "googleFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.slack }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "slackFooter" })} ` })} </div> </div> ${renderScript($$result, "/home/braco/Escritorio/collados/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/home/braco/Escritorio/collados/src/components/sections/navbar&footer/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE.title,
    meta,
    structuredData,
    lang = "en",
    customDescription = null,
    customOgTitle = null
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head>', "<title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', "", '</head> <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i">  <div class="mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", " ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "customDescription": customDescription, "customOgTitle": customOgTitle, "class": "astro-ouamjn2i" }), title, renderScript($$result, "/home/braco/Escritorio/collados/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }), renderScript($$result, "/home/braco/Escritorio/collados/src/layouts/MainLayout.astro?astro&type=script&index=1&lang.ts"));
}, "/home/braco/Escritorio/collados/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, SITE as S, $$MainLayout as a, $$AuthBtn as b, partnersData as p };
