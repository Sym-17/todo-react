import Nav from "./Nav";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </>
  );
}
