import { CardPrduct } from "../../components";

export default function HomePage() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* product list */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
          <CardPrduct
            title="Apple Watch"
            price={5000}
            image="https://flowbite.com/docs/images/products/apple-watch.png"
            rating={5.0}
          />
        </div>
      </div>
    </section>
  );
}
