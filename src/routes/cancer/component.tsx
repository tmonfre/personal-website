import { useEffect, useState } from 'react';

import { Props } from './index.d';
import { ImageCarousel, FadeLoad } from '../../components';

import './styles.scss';

const Cancer = (props: Props): JSX.Element => {
  const { images, organizations } = props;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setImageLoadStatus(Object.values(images).reduce((acc, curr) => ({
      ...acc,
      [curr.src]: false,
    }), {}));
  }, [images]);

  return (
    <FadeLoad>
      <div id="cancer-container">
        <h1>My Cancer Story</h1>
        <div className="text-image-container">
          <div className="text-container">
            <p>
              In August 2021, I was diagnosed with
              {' '}
              <a href="https://www.cancer.net/cancer-types/lymphoma-hodgkin/stages" target="_blank" rel="noreferrer">Stage 2E Hodgkin&apos;s lymphoma.</a>
              {' '}
              My diagnosis came
              less than two months after graduating college. I was set to move to a new city
              and begin my career, but my life instead took a different course. After delaying
              my work plans, moving back home with my parents, and undergoing twelve chemotherapy
              sessions ranging over a six-month period, I was officially declared cancer-free
              on February 15, 2022.
            </p>
            <p>
              I am forever grateful to my incredible family and friends who helped me through this
              journey. My parents and my sister were by my side throughout my treatment.
              Many friends and extended family texted, called, sent letters, and kept in touch.
              I am grateful for every one who thought of me, prayed for me, and supported me.
            </p>
            <p>
              I am also forever grateful for the team of doctors, nurses, and medical professionals
              at the
              {' '}
              <a href="https://www.bellin.org/services_programs/the-cancer-team" target="_blank" rel="noreferrer">Bellin Cancer Center</a>
              {' '}
              in Green Bay, WI who took care of me. I&apos;m
              happy to say I built amazing relationships with the nurses and staff over the seven
              months that I was under their care. I will think back on so many wonderful
              conversations for years to come.
            </p>
            <p>
              Lastly, I am forever grateful to have received a positive diagnosis. No form of
              cancer is
              good, but I was diagnosed with a curable disease. Among the many forms of cancer that
              exist, few fall into this category. I was also diagnosed with a relatively common form
              of cancer with a strong body of research. I recognize that many people around the
              world who are afflicted with cancer cannot say the same. To this day and for every day
              left in my life, I will be grateful for those facts. I feel fortunate and blessed.
            </p>
          </div>

          <div className="image-container">
            <img
              alt={images.survivorTree.alt}
              className={imageLoadStatus[images.survivorTree.src] ? 'image-loaded' : ''}
              onClick={() => setSelectedImageIndex(Object.keys(images).indexOf('survivorTree'))}
              onLoad={() => {
                setImageLoadStatus((curr) => ({ ...curr, [images.survivorTree.src]: true }));
              }}
              role="presentation"
              src={images.survivorTree.src}
            />
            <p>{images.survivorTree.alt}</p>
          </div>
        </div>

        <div className="line" />
        <h1>Lessons Learned</h1>
        <p>
          Fighting cancer taught me a lot. My journey was challenging, both mentally and physically,
          but it made me a stronger person and it gave me a new perspective on life.
        </p>
        <p>
          First, it taught me to
          {' '}
          <b>
            appreciate the things in life that matter the most and to be
            thankful for what I have.
          </b>
        </p>
        <p>
          Prior to my diagnosis, I often focused too much on minor inconveniences and
          transgressions. It can be easy to get upset that the line at the coffee shop
          is long or that I am busy and having a stressful day. While those feelings and
          frustrations are often valid, this experience showed me how to assess problems
          relative to a bigger picture. It taught me to let go of minor problems and be
          grateful for the world and life around me. I distinctly remember walking out of
          the hospital on the first day I found out I had cancer (not yet knowing my diagnosis)
          and looking intently at the trees and the grass and the sunshine. I found myself
          struck with their beauty and thought that I should appreciate them more while I
          know I can. I think this idea applies to many parts of life.
        </p>
        <p>
          Second, this experience taught me to
          {' '}
          <b>
            focus on the things that I can control and to surrender to the things
            that I cannot.
          </b>
        </p>
        <p>
          Early on in my treatment, I suffered a delay due to extremely low white blood cell
          counts. After my first chemotherapy session, my level of
          {' '}
          <a href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/neutrophil" target="_blank" rel="noreferrer">neutrophils</a>
          {' '}
          — the body&apos;s
          first line of defense against infection — was essentially zero. We could not proceed
          with my second chemo because I would have been at too high risk of developing an
          infection that my body could not fight. I had to wait a week while my bone marrow
          produced more neutrophils.
        </p>
        <p>
          At first, I was upset that I suffered a delay. I just wanted to get the experience
          behind me, and anything that stood in the way of that made me furious. However, I
          learned that being mad about that didn&apos;t get me anywhere. I couldn&apos;t control the
          fact that my white blood cell counts were dropping more than my doctors expected
          just like I couldn&apos;t control the fact that I had cancer in the first place. Rather
          than being upset about it, I decided that I didn&apos;t want to waste mental energy on
          it if my thoughts and actions couldn&apos;t affect its outcome. To quote the late
          {' '}
          <a href="https://www.cmu.edu/randyslecture/story/" target="_blank" rel="noreferrer">Prof. Randy Pausch</a>
          {' '}
          — author of
          {' '}
          <a href="https://www.cmu.edu/randyslecture/book/index.html" target="_blank" rel="noreferrer"><em>The Last Lecture</em></a>
          {' '}
          who died of complications from pancreatic cancer in 2008 —
          &quot;we cannot control the cards we are dealt, just how we play the hand.&quot;
        </p>
        <p>
          Lastly, my journey with cancer taught me to
          {' '}
          <b>practice optimism</b>
          .
        </p>
        <p>
          When I was first told that I had cancer, the doctors did not know what form until
          I had a biopsy. They laid out several possibilities based on my clinical presentation
          and told me of the potential outcomes. I learned quickly that the possibilities
          varied widely. Some were favorable diseases (such as my ultimate diagnosis) and others
          frankly were very unfavorable. I had to wait ten days from finding out I had cancer to
          learning what form. This was by far the scariest ten days of my life and it is an
          experience I wish upon no one. I was afraid I was going to die and I spent most nights
          crying before falling asleep. While it was ultimately a short period of time and I
          ended up receiving a good diagnosis, I had to seriously force myself to remain optimistic
          during that time in order to avoid spiraling. I had to remind myself that I didn&apos;t
          know what it was yet and to not jump to premature conclusions. I learned that having a
          healthy but grounded dose of optimism leads to a positive mental outlook, and that a
          positive mental outlook helped me stay together. I also learned that I had to practice
          that optimism. It did not come immediately, but it took effort. And I learned that
          that effort was worth it.
        </p>
        <div className="line" />
        <h1>Getting Involved</h1>
        <p>
          As I get settled into a new normal and get used to categorizing myself as a
          cancer survivor, I want to get involved in the fight to end this disease.
          More research is needed to discover new treatments and investigate potential root
          causes of this illness. Volunteers are needed to help patients get to hospitals,
          buy groceries, afford childcare, and more.
        </p>
        <p>
          If you have the resources, please considering
          donating your time or money to the many organizations fighting to end cancer:
        </p>
        <ul>
          {organizations.map(({ title, href }) => (
            <li><a href={href} target="_blank" rel="noreferrer">{title}</a></li>
          ))}
        </ul>
        {selectedImageIndex !== undefined && (
          <ImageCarousel
            closeCarousel={() => setSelectedImageIndex(undefined)}
            images={Object.values(images)}
            selectedIndex={selectedImageIndex}
            setSelectedIndex={setSelectedImageIndex}
          />
        )}
      </div>
    </FadeLoad>
  );
};

export default Cancer;
