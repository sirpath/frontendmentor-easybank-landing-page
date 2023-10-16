import Image from 'next/image'

type DataArticle = {
  alt: string
  photoArticle: string
  author: string
  subject: string
  desc: string
}

const dataArticle:Array<DataArticle> = [{
  alt: 'image-currency',
  photoArticle: './images/image-currency.jpg',
  author: 'Claire Robinson',
  subject: 'Receive money in any currency with no fees',
  desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
},
{
  alt: 'image-restaurant',
  photoArticle: './images/image-restaurant.jpg',
  author: 'Wilson Hutton',
  subject: 'Treat yourself without worrying about money',
  desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
},
{
  alt: 'image-plane',
  photoArticle: './images/image-plane.jpg',
  author: 'Wilson Hutton',
  subject: 'Take your Easybank card wherever you go',
  desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
},
{
  alt: 'image-confetti',
  photoArticle: './images/image-confetti.jpg',
  author: 'Claire Robinson',
  subject: 'Our invite-only Beta accounts are now live!',
  desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
},
]

const Articles = () => (
  <section className="bg-very-light-gray px-5 py-16 text-primary lg:px-32">

    <h4 className="py-6 text-center text-3xl md:text-left">Latest Articles</h4>

    <div className="flex flex-col gap-6 md:flex-row">
      {dataArticle.map(({ alt, photoArticle, author, subject, desc }) => (
        <div key={author} className="rounded-xl bg-white [&_h6]:leading-4 [&_p]:py-2 [&_p]:text-xs [&_p]:text-secondary">
          <div>
            <Image className="rounded-t-lg object-cover md:h-[222px] md:w-[334px]" width={600} height={360} src={photoArticle} alt={alt} />
          </div>
          <div className="p-6 px-7">
            <p>
              By
              {' '}
              <span>{author}</span>
            </p>
            <h6>{subject}</h6>
            <p>
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Articles
