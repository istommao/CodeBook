function sidebarSQL() {
  return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/sql/intro' },
        ]        
      },
   ]
}


function sidebarRust() {
  return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/rust/intro' },
          { text: 'Install', link: '/rust/install' },
        ]        
      },
      {
        text: "Basic",
        items: [
          {text: "Array", link: '/rust/array'},
          {text: "Function", link: '/rust/fn'},
          {text: "If else", link: '/rust/ifelse'},
          {text: "Match", link: '/rust/match'},
          {text: "For While Loop", link: '/rust/forloop'},
          {text: "Struct", link: '/rust/struct'},
        ]
      },
   ]
}

function sidebarGolang() {
  return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/golang/intro' },
          { text: 'Playground', link: '/golang/playground' },
          { text: 'Install', link: '/golang/install' },
        ]        
      },
   ]
}

function sidebarPython() {
  return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/python/intro' },
          { text: 'Install', link: '/python/install' },
        ]        
      },
      {
        text: 'Basic',
        items: [
          {
            text: 'DataType',
            items: [
              { text: 'Int', link: '/python/basic/int' },
              { text: 'String', link: '/python/basic/str' },
              { text: 'Tuple', link: '/python/basic/tuple' },
              { text: 'List', link: '/python/basic/list' },
              { text: 'Dict', link: '/python/basic/dict' },
              { text: 'Set', link: '/python/basic/set' },
            ] 
          },
          { text: 'Function', link: '/python/function'},
          { text: 'Class', link: '/python/class' },
        ]
      },
      {
        text: 'Build-in',
        items: [
          { text: 'collections.deque', link: '/python/collections.deque' },
        ]
      },
      {
        text: 'Magic Method',
        items: [
          { text: '__getitem__', link: '/python/magic_getitem' },
        ]
      }
    ]
}



function sidebarPython() {
  return [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/python/intro' },
          { text: 'Install', link: '/python/install' },
        ]        
      },
      {
        text: 'Basic',
        items: [
          {
            text: 'DataType',
            items: [
              { text: 'Int', link: '/python/basic/int' },
              { text: 'String', link: '/python/basic/str' },
              { text: 'Tuple', link: '/python/basic/tuple' },
              { text: 'List', link: '/python/basic/list' },
              { text: 'Dict', link: '/python/basic/dict' },
              { text: 'Set', link: '/python/basic/set' },
            ] 
          },
          { text: 'Function', link: '/python/function'},
          { text: 'Class', link: '/python/class' },
        ]
      },
      {
        text: 'Build-in',
        items: [
          { text: 'collections.deque', link: '/python/collections.deque' },
        ]
      },
      {
        text: 'Magic Method',
        items: [
          { text: '__getitem__', link: '/python/magic_getitem' },
        ]
      }
    ]
}


export default {
  title: 'CodeBook',
  description: 'CodeBook',
  head: [
    ['script', { defer: true, src: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js' }],
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/istommao' }
    ],
    nav: [
      { text: 'ToolBox', link: 'https://t.codingcat.top/' },
    ],
    sidebar: {
      '/rust/': sidebarRust(),
      '/golang/': sidebarGolang(),
      '/python/': sidebarPython(),
      '/sql/': sidebarSQL()
    }
  }
}