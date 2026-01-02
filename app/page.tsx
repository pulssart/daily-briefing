export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
          Daily Briefing
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Votre dashboard personnel - emails, calendrier et santé
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold mb-4">📧 Emails</h2>
            <p className="text-text-secondary">
              Accédez à vos emails importants
            </p>
          </div>
          
          {/* Calendar Card */}
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold mb-4">📅 Calendrier</h2>
            <p className="text-text-secondary">
              Vos événements à venir
            </p>
          </div>
          
          {/* Health Card */}
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold mb-4">💪 Santé</h2>
            <p className="text-text-secondary">
              Vos données de santé
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
