import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-16 border-b bg-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
      
      <main className="flex-1 flex">
        <div className="w-64 border-r p-4">
          <Skeleton className="h-8 w-full mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        
        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-12">
            <Skeleton className="h-[300px] w-full mb-4" />
            <Skeleton className="h-10 w-32" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </main>
    </div>
  );
} 