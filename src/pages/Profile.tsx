import { User, Mail, Calendar } from 'lucide-react';

export function Profile() {
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: '2024-03-01',
    avatar: 'https://source.unsplash.com/150x150/?portrait',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 h-32"></div>
        <div className="px-4 py-6 -mt-16">
          <div className="flex flex-col items-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="mt-4 text-2xl font-bold">{profile.name}</h1>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <User className="h-5 w-5" />
              <span>{profile.name}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}