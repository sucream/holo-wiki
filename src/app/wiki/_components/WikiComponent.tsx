import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
const components = {
  h1: (
    props: Readonly<{
      children?: React.ReactNode;
    }>,
  ) => (
    <h1
      {...props}
      className="border-b border-b-black text-3xl font-extrabold"
      id={props.children as string}
    >
      {props.children}
    </h1>
  ),
  h2: (
    props: Readonly<{
      children?: React.ReactNode;
    }>,
  ) => (
    <h2
      {...props}
      className="mt-4 border-b border-b-black text-2xl font-bold"
      id={props.children as string}
    >
      {props.children}
    </h2>
  ),
  h3: (
    props: Readonly<{
      children?: React.ReactNode;
    }>,
  ) => (
    <h3
      {...props}
      className="mt-4 border-b border-b-black text-xl font-bold"
      id={props.children as string}
    >
      {props.children}
    </h3>
  ),
  p: (
    props: Readonly<{
      children?: React.ReactNode;
    }>,
  ) => <p {...props} className="mt-2 text-sm" />,
  li: (
    props: Readonly<{
      children?: React.ReactNode;
    }>,
  ) => <li {...props} className="mt-2 text-sm" />,
  img: (
    props: Readonly<{
      src?: string;
      children?: React.ReactNode;
    }>,
  ) => (
    <Image
      {...props}
      src={props.src ?? ""}
      width={400}
      height={200}
      className="rounded-lg"
      alt=""
    />
  ),
};

export default function CustomMDX(
  props: Readonly<{
    source: string;
    components?: Record<string, React.ComponentType>;
    children?: React.ReactNode;
    className?: string;
  }>,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
