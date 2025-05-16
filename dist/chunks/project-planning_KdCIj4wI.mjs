import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CQl11rBO.mjs';
import { $ as $$Card } from './Code_Crt2o1Mn.mjs';
import 'clsx';

const frontmatter = {
  "title": "Project Planning and Management",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Project Planning",
    "order": 2
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Achieve seamless project execution with ScrewFast’s meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise."
    }), "\n", createVNode($$Card, {
      title: "Our planning and management services include:",
      icon: "seti:notebook",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Detailed project timelines"
        }), "\n", createVNode(_components.li, {
          children: "Resource allocation and optimization"
        }), "\n", createVNode(_components.li, {
          children: "Regular progress updates and reports"
        }), "\n", createVNode(_components.li, {
          children: "Risk assessment and management"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "We believe in proactive management to foresee potential challenges and devise solutions before they impact the project."
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

const url = "src/content/docs/construction/project-planning.mdx";
const file = "/home/braco/Escritorio/collados/src/content/docs/construction/project-planning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/braco/Escritorio/collados/src/content/docs/construction/project-planning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
