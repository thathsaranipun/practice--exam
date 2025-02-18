namespace TargetsMasterAPI.Models
{
    public class Target
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Frequency { get; set; } // Daily, Weekly, Monthly, etc.
        public decimal Weightage { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidTo { get; set; }
    }
}
