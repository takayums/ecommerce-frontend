export default function Footer() {
  const year = new Date();
  const yearNow = year.getFullYear();
  return (
    <footer className="flex items-center justify-center border border-gray-300 p-3">
      <p className="text-sm font-normal text-gray-500 sm:text-base">
        &copy; {yearNow} takayumastore. All Rights Reserved
      </p>
    </footer>
  );
}
