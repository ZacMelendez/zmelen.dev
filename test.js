const content = `<p>Lucas ipsum dolor sit amet iblis shawda kastolar yoda ev-9d9 dorvalla owen altyr ken maximilian. Unduli boba til trioculus arkanian timoliini. Dagobah darth taung nikto vivenda tagge alderaan trioculus. Castell saffa tc-14 sikan rune vodran. Darth p'w'eck kalarba tarpals skakoan jek felucia. Melodie ansuroer ithorian tibor. Echani raa crynyd jabiimas bane saleucami massans yoda amedda. Darth lama qu brak droopy luke moff bespin. Neimoidia nass hutt droid geonosis wroonian t'landa kir. Sarn lahara tc-14 oola.</p><pre class="ql-syntax" spellcheck="false">export default function BlogPost(props) {
    const { currentBlog, setCurrentBlog, blogs } = useContext(BlogContext)

    useEffect(() =&gt; {
        if (!props.id) {
            setCurrentBlog(blogs[0])
        }
        else if (!currentBlog.id &amp;&amp; blogs.length &gt; 0) {
            setCurrentBlog(blogs.filter(blog =&gt; blog.title.split(' ').join('-') === props.id)[0])
        }
    }, [blogs])

    return (
        &lt;article className={styles.blogPost}&gt;
            {!currentBlog ? &lt;p&gt;loading...&lt;/p&gt;
                :
                &lt;&gt;
                    &lt;div className={styles.blogHeader}&gt;
                        &lt;div&gt;
                            &lt;h1 className={styles.blogTitle}&gt;{currentBlog.title}&lt;/h1&gt;
                            &lt;h3 className={styles.blogDate}&gt;{new Date(currentBlog['created_at']).toLocaleDateString("en-US", options)}&lt;/h3&gt;
                        &lt;/div&gt;
                        &lt;div className={styles.author}&gt;
                            &lt;img src={'https://res.cloudinary.com/drmatz1gd/image/upload/v1646436000/IMG_0117_flxain.jpg'} /&gt;
                            &lt;p&gt;Zach&lt;br /&gt;Melendez&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div className={styles.content}&gt;
                        &lt;p dangerouslySetInnerHTML={{
                            __html: marked.parse(currentBlog.content ?
                                currentBlog.content
                                : '')
                        }} /&gt;
                    &lt;/div&gt;
                &lt;/&gt;
            }
        &lt;/article&gt;
    )
}
</pre><p>Vagaari bossk hutt chagrian ewok teevan grievous moff galen. Ima-gun aka garindan toydarian illum mygeeto. Naberrie subterrel carondian ventress mustafarian bib kowakian biggs. Gricho thrackan qui-gonn cadavine. Antonio cabasshite ranat dexter valorum elomin vong ig-88 muzzer. Typho nagai coruscant pavan cornelius arkanian sern. Mothma trianii iktotchi shadda. Biggs iego terrik bail rishii mara valorum dodonna. Atrivis thakwaash terrik b'omarr shistavanen thisspias. Watto rishii jinn terentatek moff.</p><pre class="ql-syntax" spellcheck="false">export default function Footer() {
    return (
        &lt;footer className = {styles.footer}&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href="https://github.com/ZacMelendez/" target="_blank" rel="noreferrer"&gt;
                        &lt;GitHub /&gt;
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href="https://www.linkedin.com/in/zachary-melendez-399174a8/" target="_blank" rel="noreferrer"&gt;
                        &lt;LinkedIn /&gt;
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href="https://codepen.io/ZacMelendez" target="_blank" rel="noreferrer"&gt;
                        &lt;CodePen /&gt;
                    &lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/footer &gt;
    )
}
</pre><p>Mohc zam needa isard davin subterrel cadavine gunray. Allie keshiri vong derlin cordé chagrian caamasi. X1 shimrra irek fett fisto. Karrde quinlan calrissian abregado. Keyan klivian ryn garindan gunray bothawui bel dantari. Teneniel jabba tc-14 drall. Darth stereb veknoid wesell tc-14. Woostoid mandalore moff jamillia bail baba raynar gossam ishi. Kenobi solo gerb golda raynar trioculus antilles. Bib keyan elrood jax bria irek maarek arkanian. Veers whitesun tchuukthai karrde djo umbaran onimi.</p>`

console.log(content.split('pre>'))