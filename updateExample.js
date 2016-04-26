  function _esc(s) {
      s = s.replace(/&/g,'&amp;');
      s = s.replace(/>/g,'&gt;');
      s = s.replace(/"/g,'&quot;');
      s = s.replace(/</g,'&lt;');
      return s;
  }


  function updateExample(doc, content) {
    // perform transformations to make it render and prettier
    content = content.replace(/<!--/, '');
    content = content.replace(/-->/, '');
    content = _esc(content);
    content = content.replace(/\*\*\*\*([^*]*)\*\*\*\*/g, '<span class="hilite">$1</span>') ;
    return content ;
  }
