import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-cc5662fc.js";const p={},t=e(`<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>Type1<span class="token operator">&amp;</span>Type2<span class="token operator">&amp;</span>Type3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4><p>TS交叉类型用于将多个类型合并为一个类型。它可以用于创建一个新的类型，该类型具有多个类型的所有特性和成员。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  company<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  position<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PersonAndEmployee</span> <span class="token operator">=</span> Person <span class="token operator">&amp;</span> Employee<span class="token punctuation">;</span>

<span class="token keyword">const</span> personAndEmployee<span class="token operator">:</span> PersonAndEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  company<span class="token operator">:</span> <span class="token string">&quot;ABC Company&quot;</span><span class="token punctuation">,</span>
  position<span class="token operator">:</span> <span class="token string">&quot;Manager&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function i(c,l){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","4.交叉类型.html.vue"]]);export{u as default};
