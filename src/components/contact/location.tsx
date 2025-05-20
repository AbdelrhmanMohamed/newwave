interface MapSectionProps {
  mapUrl: string;
}

export default function MapSection({
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6732252889824!2d46.67759837605857!3d24.703516384128085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0328aa79b1f3%3A0xb86ad51180038b0e!2z2YXYtdix2YEg2KfZhNin2YbZhdin2KE!5e0!3m2!1sen!2sus!4v1716142177000!5m2!1sen!2sus",
}: MapSectionProps) {
  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps location"
      aria-label="Map showing our business location"
    ></iframe>
  );
}
