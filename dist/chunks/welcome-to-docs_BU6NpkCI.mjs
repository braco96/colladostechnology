import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CQl11rBO.mjs';
/* empty css                                  */
import { $ as $$Card, a as $$CardGrid } from './Code_Crt2o1Mn.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast Docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast Docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Documentation Hub",
    "tagline": "Your central hub for streamlined tool guidance, detailed service docs, and project support.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../images/starlight/screwfast_hero.svg",
      "light": "../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "variant": "minimal",
      "link": "https://github.com/mearashadowfax/ScrewFast"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Quick Start Guides",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Get up and running swiftly with our straightforward and concise guides, tailored for new users and seasoned experts alike."
      })
    }), createVNode($$Card, {
      title: "Tools & Equipment",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
      })
    }), createVNode($$Card, {
      title: "Construction Services",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
      })
    }), createVNode($$Card, {
      title: "Advanced Topics",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/docs/welcome-to-docs.mdx";
const file = "/home/braco/Escritorio/collados/src/content/docs/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/braco/Escritorio/collados/src/content/docs/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
