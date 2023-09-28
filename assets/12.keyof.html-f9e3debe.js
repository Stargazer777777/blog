import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-ed72bae4.js";const t={},p=e(`<p>获取key的联合类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
	<span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;daw&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ObjKeys</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span> <span class="token comment">// type ObjKeys = &quot;a&quot; | 3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些高级用法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Options<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
	a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">OptionalItem</span> <span class="token operator">=</span> Options<span class="token operator">&lt;</span>Item<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">/*
type OptionalItem = {
    a?: number | undefined;
    b?: string | undefined;
}
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","12.keyof.html.vue"]]);export{u as default};
