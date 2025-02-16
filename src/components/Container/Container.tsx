interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
} 