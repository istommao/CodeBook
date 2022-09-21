export default {
  title: 'CodeBook',
  description: 'CodeBook',
// head: [
//         ['script', { defer: true, id: "PyodideJS", src: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js' }],
//     ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/istommao' }
     ],
    nav: [
      { text: 'ToolBox', link: 'https://t.codingcat.top/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/python/intro' },
          { text: 'Function', link: '/python/function' },
        ]
      }
    ]
  }
}