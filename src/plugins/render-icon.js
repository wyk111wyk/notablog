const plugin = {
  name: 'renderIcon',
  func: renderIcon,
  options: {
    // Here may define default options if a user doesn't override.
  }
}

module.exports = plugin

function renderIcon() {
  /**
   * A plugin gets `this.pageType` and `this.context` when called.
   * `this.pageType` is useful to determine what the format of the context
   * is.
   * `this.context` can be manipulated.
   * `this.options` are options that can be set by a user.
   */
  let pageType = this.pageType
  let context = this.context

  if (pageType === 'index') {
    context.siteMetadata.iconHTML = renderIconToHTML(context.siteMetadata.icon)
    context.index.posts.forEach(post => {
      post.iconHTML = renderIconToHTML(post.icon)
    })
  } else if (pageType === 'post') {
    context.siteMetadata.iconHTML = renderIconToHTML(context.siteMetadata.icon)
    context.post.iconHTML = renderIconToHTML(context.post.icon)
  }

}

function renderIconToHTML(icon) {
  let re = /^http/
  if (re.test(icon)) {
    return `<img class="inline-img-icon" src="${icon}">`
  } else {
    return icon
  }
}