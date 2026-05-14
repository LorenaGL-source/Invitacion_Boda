const AddToCalendar = () => {
  const eventDetails = {
    title: "Boda de Ana y Carlos",
    description: "Nos casamos y queremos que estés presente en este día especial. Ceremony: 17:00 | Reception: 18:30 | Fiesta: 21:00",
    location: "Hacienda San Miguel, Valle de Bravo, Estado de México",
    startDate: "20260815T170000",
    endDate: "20260816T020000"
  };

  const generateGoogleCalendarUrl = () => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.append("action", "TEMPLATE");
    url.searchParams.append("text", eventDetails.title);
    url.searchParams.append("details", eventDetails.description);
    url.searchParams.append("location", eventDetails.location);
    url.searchParams.append("dates", `${eventDetails.startDate}/${eventDetails.endDate}`);
    window.open(url.toString(), "_blank");
  };

  const generateICSCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "boda-ana-y-carlos.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 text-center">
      <div className="card-elegant p-8">
        <div className="text-4xl mb-4">📅</div>
        <h2 className="font-serif text-2xl text-[#2C2C2C] mb-2">
          Añadir a tu Calendario
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          No olvides nuestra boda. Añádela a tu calendario para no perderte ni un momento.
        </p>

        <div className="space-y-3">
          <button
            onClick={generateGoogleCalendarUrl}
            className="w-full btn-primary py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2"
          >
            <span>📆</span>
            Añadir a Google Calendar
          </button>
          
          <button
            onClick={generateICSCalendar}
            className="w-full bg-white border-2 border-[#8B7355] text-[#8B7355] py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#8B7355] hover:text-white transition-colors"
          >
            <span>📱</span>
            Descargar para Apple/Outlook
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            <strong>Fecha:</strong> 15 de Agosto, 2026<br />
            <strong>Hora:</strong> 17:00 horas<br />
            <strong>Lugar:</strong> Hacienda San Miguel, Valle de Bravo
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCalendar;
