import Link from 'next/link';

interface Props {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <Link href="/">go to HomePage</Link>
    </div>
  );
};

export default DetailPage;
